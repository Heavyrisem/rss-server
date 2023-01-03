import { RssFeed } from './entity/rss-feed.entity';
import { RssItem } from './entity/rss-item.entity';

export enum FEED {
  NONE,
  GITHUB,
}

export interface RssItemInterface {
  title: string;
  author: string;
  content: string;
  pubDate: Date;
  feed: RssFeed;
}
export interface RssFeedInterface {
  title: string;
  link: string;
  rssLink: string;
  lastBuildDate: Date;
  type: FEED;
  items: RssItem[];
}

export interface GithubItem {
  title: string;
  link: string;
  author: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: Date;
  pubDate: Date;
}
export interface GithubFeed {
  link: string;
  feedUrl: string;
  title: string;
  lastBuildDate: Date;
  items: GithubItem[];
}
