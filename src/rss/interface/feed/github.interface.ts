import Parser, { CustomFields } from 'rss-parser';

import { XmlAttribute } from '../rss.interface';

export interface GithubItem extends Omit<Parser.Item, 'isoDate' | 'pubDate'> {
  title: string;
  link: string;
  author: string;
  content: string;
  contentSnippet: string;
  id: string;
  isoDate: Date;
  pubDate: Date;

  'media:thumbnail': XmlAttribute<{ height: number; width: number; url: string }>;
}
export const githubCustomFields: CustomFields<GithubFeed, GithubItem> = {
  item: ['media:thumbnail'],
  feed: [],
};
export interface GithubFeed extends Omit<Parser.Output<GithubItem>, 'items'> {
  link: string;
  feedUrl: string;
  title: string;
  lastBuildDate: Date;
  items: GithubItem[];
}
