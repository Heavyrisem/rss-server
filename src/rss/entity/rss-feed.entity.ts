import { Column, Entity, OneToMany } from 'typeorm';

import { CoreEntity } from '~modules/database/core.entity';

import { FEED, RssFeedInterface } from '../rss.interface';

import { RssItem } from './rss-item.entity';

@Entity()
export class RssFeed extends CoreEntity implements RssFeedInterface {
  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  rssLink: string;

  @Column()
  lastBuildDate: Date;

  @Column({ type: 'enum', enum: FEED, default: FEED.NONE })
  type: FEED;

  @OneToMany(() => RssItem, (rssFeed) => rssFeed.id)
  items: RssItem[];

  static createRssFeed(data: RssFeedInterface): RssFeed {
    const rssFeed = new RssFeed();

    rssFeed.title = data.title;
    rssFeed.link = data.link;
    rssFeed.rssLink = data.rssLink;
    rssFeed.lastBuildDate = data.lastBuildDate;
    rssFeed.type = data.type;
    rssFeed.items = data.items.map((item) => RssItem.createRssItem(item));

    return rssFeed;
  }
}
