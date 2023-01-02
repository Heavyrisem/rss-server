export enum FEED {
  GITHUB,
  NONE,
}

export interface RssItemInterface {
  title: string;
  author: string;
  content: string;
  pubDate: Date;
}
export interface RssFeedInterface {
  title: string;
  link: string;
  rssLink: string;
  lastBuildDate: Date;
  type: FEED;
  items: RssItemInterface[];
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
