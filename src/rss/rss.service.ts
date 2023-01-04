import { DataSource, FindManyOptions, FindOneOptions, Repository } from 'typeorm';

import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  getLastBuildDateFromRssItems,
  getRssFeedData,
  getRssFeedType,
  toRssFeed,
} from '~modules/util/rss/rss.util';

import { RssFeed } from './entity/rss-feed.entity';
import { RssItem } from './entity/rss-item.entity';

@Injectable()
export class RssService {
  private readonly logger = new Logger('RssService');

  constructor(
    private readonly dataSource: DataSource,
    @InjectRepository(RssFeed) private readonly rssFeedRepository: Repository<RssFeed>,
    @InjectRepository(RssItem) private readonly rssItemRepository: Repository<RssItem>,
  ) {}

  async scrapRssFeed(rssLink: string) {
    const type = getRssFeedType(rssLink);
    const rssFeedData = await getRssFeedData(rssLink, type);

    return toRssFeed(rssFeedData, rssLink);
  }

  async subscribeRssFeed(rssLink: string) {
    const isExist = await this.getRssFeedByRssLink(rssLink);
    if (isExist) throw new ConflictException('RssFeed Already Subscribed');

    const rssFeed = await this.scrapRssFeed(rssLink);

    return this.rssFeedRepository.save(rssFeed);
  }

  async addRssItems(feedId: number, rssItems: RssItem[]) {
    if (rssItems.length === 0) return rssItems;
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    let savedRssItems: RssItem[] = [];
    try {
      const feed = await this.getRssFeedById(feedId, { relations: [] });
      feed.lastBuildDate = getLastBuildDateFromRssItems(rssItems);
      await queryRunner.manager.update(RssFeed, feed.id, feed);

      const filteredRssItems = rssItems.filter(
        (rssItem, i) =>
          rssItems.findIndex(
            (compare) =>
              rssItem.title === compare.title &&
              rssItem.content === compare.content &&
              rssItem.pubDate.getTime() === compare.pubDate.getTime(),
          ) === i,
      );
      const tasks = filteredRssItems.map(
        (rssItem) =>
          new Promise<RssItem | null>(async (resolve, reject) => {
            const existRssItem = await queryRunner.manager.findOne(RssItem, {
              where: {
                title: rssItem.title,
                author: rssItem.author,
                pubDate: rssItem.pubDate,
                feed: { id: feed.id },
              },
            });
            if (existRssItem) resolve(null);

            const tempRssFeed = new RssFeed();
            tempRssFeed.id = feed.id;
            rssItem.feed = tempRssFeed;
            await queryRunner.manager.save(RssItem, rssItem).then(resolve).catch(reject);
          }),
      );

      savedRssItems = await Promise.all(tasks);
      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      this.logger.error(e);
      throw e;
    } finally {
      await queryRunner.release();
      return savedRssItems.filter((rssItem) => rssItem !== null);
    }
  }

  async getRssFeedById(id: number, options?: FindOneOptions<RssFeed>) {
    return this.rssFeedRepository.findOne({ where: { id }, relations: ['items'], ...options });
  }

  async getRssFeedByTitle(title: string, options?: FindOneOptions<RssFeed>) {
    return this.rssFeedRepository.findOne({ where: { title }, relations: ['items'], ...options });
  }

  async getRssFeedByRssLink(rssLink: string, options?: FindOneOptions<RssFeed>) {
    return this.rssFeedRepository.findOne({ where: { rssLink }, relations: ['items'], ...options });
  }

  async getAllFeeds(options?: FindManyOptions<RssFeed>) {
    return this.rssFeedRepository.find({ relations: ['items'], ...options });
  }
}
