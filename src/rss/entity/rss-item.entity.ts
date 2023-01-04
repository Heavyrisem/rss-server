import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';

import { CoreEntity } from '~modules/database/core.entity';

import { RssItemInterface } from '../interface/rss.interface';

import { RssFeed } from './rss-feed.entity';

@Entity()
export class RssItem extends CoreEntity implements RssItemInterface {
  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  author: string;

  @Column({ type: 'text', nullable: false })
  content: string;

  @Column({ nullable: true })
  imageSrc?: string;

  @Exclude()
  @ManyToOne(() => RssFeed, (rssFeed) => rssFeed.items, { cascade: false, nullable: false })
  feed: RssFeed;

  @Column({ nullable: false })
  pubDate: Date;

  setData(data: RssItemInterface) {
    this.title = data.title;
    this.content = data.content;
    this.author = data.author;
    this.feed = data.feed;
    this.imageSrc = data.imageSrc;
    this.pubDate = new Date(data.pubDate);
  }

  static createRssItem(data: RssItemInterface): RssItem {
    const rssItem = new RssItem();
    rssItem.setData(data);
    return rssItem;
  }
}
