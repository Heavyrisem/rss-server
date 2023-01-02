import { Column, Entity } from 'typeorm';

import { CoreEntity } from '~modules/database/core.entity';

import { RssItemInterface } from '../rss.interface';

@Entity()
export class RssItem extends CoreEntity implements RssItemInterface {
  @Column()
  title: string;

  @Column()
  author: string;

  @Column({ default: '' })
  content: string;

  @Column()
  pubDate: Date;

  static createRssItem(data: RssItemInterface): RssItem {
    const rssItem = new RssItem();

    rssItem.title = data.title;
    rssItem.content = data.content;
    rssItem.author = data.author;
    rssItem.pubDate = new Date(data.pubDate);

    return rssItem;
  }
}
