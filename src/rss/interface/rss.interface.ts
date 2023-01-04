import Parser from 'rss-parser';

import { RssFeed } from '../entity/rss-feed.entity';
import { RssItem } from '../entity/rss-item.entity';

import { GithubFeed } from './feed/github.interface';
import { YoutubeFeed } from './feed/youtube.interface';

export enum FEED {
  NONE,
  GITHUB,
  YOUTUBE,
}

export interface RssItemInterface {
  title: string;
  author: string;
  content: string;
  imageSrc?: string;
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

export interface XmlAttribute<T> {
  $: T;
}

export interface BaseRssFeedData {
  type: FEED.NONE;
  data: Parser.Output<Record<string, any>>;
}
export interface GithubFeedData {
  type: FEED.GITHUB;
  data: GithubFeed;
}
export interface YoutubeFeedData {
  type: FEED.YOUTUBE;
  data: YoutubeFeed;
}

export type RssFeedData = BaseRssFeedData | GithubFeedData | YoutubeFeedData;
