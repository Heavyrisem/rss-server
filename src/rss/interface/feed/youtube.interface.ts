import Parser, { CustomFields } from 'rss-parser';

import { XmlAttribute } from '../rss.interface';

export interface YoutubeItem extends Omit<Parser.Item, 'isoDate' | 'pubDate'> {
  'media:group': YoutubeMediaGroup;
  title: string;
  link: string;
  pubDate: Date;
  author: string;
  id: string;
  isoDate: Date;
}
export interface YoutubeFeed extends Omit<Parser.Output<YoutubeItem>, 'items'> {
  link: string;
  feedUrl: string;
  title: string;
  items: YoutubeItem[];
  published: Date;
}
export const youtubeCustomFields: CustomFields<YoutubeFeed, YoutubeItem> = {
  item: ['media:group'],
  feed: ['published'],
};

interface YoutubeMediaCommunity {
  'media:starRating': XmlAttribute<{
    count: number;
    average: number;
    min: number;
    max: number;
  }>[];
  'media:statistics': XmlAttribute<{ views: number }>[];
}
interface YoutubeMediaGroup {
  'media:title': string[];
  'media:content': string[];
  'media:thumbnail': XmlAttribute<{
    height: number;
    width: number;
    url: string;
  }>[];
  'media:description': string[];
  'media:community': YoutubeMediaCommunity[];
}
