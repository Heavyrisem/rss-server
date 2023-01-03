import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { RssService } from '~src/rss/rss.service';

@Injectable()
export class RssTaskService {
  private readonly logger = new Logger('RssTaskService');

  constructor(private readonly rssService: RssService) {}

  @Cron('0/10 * * * * *') //TODO: dev/prod 다른 주기 적용
  async scrapRssFeeds() {
    const feeds = await this.rssService.getAllFeeds({ relations: [] });
    const tasks = feeds.map((feed) => async () => {
      const timer = new Date().getTime();
      this.logger.debug(`Scraping ${feed.rssLink}`);

      const newRssFeed = await this.rssService.scrapRssFeed(feed.rssLink);
      const newRssItems = newRssFeed.items.filter((item) => feed.lastBuildDate < item.pubDate);

      const updatedRssItems = await this.rssService.addRssItems(feed.id, newRssItems);
      this.logger.debug(
        `${feed.rssLink} Scraped in ${new Date().getTime() - timer}ms, Updated ${
          updatedRssItems.length
        }`,
      );
    });

    this.logger.debug(`Starting Rss Scrap Job, ${tasks.length} tasks`);
    for (const task of tasks) {
      await task();
    }
  }
}
