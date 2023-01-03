import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

import { CoreEntity } from '~modules/database/core.entity';

import { FEED, RssFeedInterface } from '../rss.interface';

import { RssItem } from './rss-item.entity';

@Entity()
export class RssFeed extends CoreEntity implements RssFeedInterface {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  link: string;

  @Column({ nullable: false })
  rssLink: string;

  @Column({ nullable: false })
  lastBuildDate: Date;

  @Column({ type: 'enum', enum: FEED, default: FEED.NONE, nullable: false })
  type: FEED;

  @OneToMany(() => RssItem, (rssItem) => rssItem.feed, { cascade: ['insert', 'update'] })
  items: RssItem[];

  setData(data: RssFeedInterface) {
    this.title = data.title;
    this.link = data.link;
    this.rssLink = data.rssLink;
    this.lastBuildDate = data.lastBuildDate;
    this.type = data.type;
    this.items = data.items.map((item) => RssItem.createRssItem(item));
  }

  static createRssFeed(data: RssFeedInterface): RssFeed {
    const rssFeed = new RssFeed();
    rssFeed.setData(data);
    return rssFeed;
  }
}
