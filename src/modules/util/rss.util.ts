import Parser from 'rss-parser';

import { InternalServerErrorException } from '@nestjs/common';

import { RssFeed } from '~src/rss/entity/rss-feed.entity';
import { FEED, GithubFeed, RssFeedInterface } from '~src/rss/rss.interface';

export const getRssFeedType = (url: string): FEED => {
  const domain = url.split('//')[1].split('/')[0];

  if (domain.includes('github.com')) return FEED.GITHUB;

  return FEED.NONE;
};

type toRssFeedParam = { rssLink: string } & Record<string, any>;
export const toRssFeed = ({ rssLink, ...data }: toRssFeedParam, type: FEED): RssFeed => {
  if (type === FEED.GITHUB) {
    const rss = data as GithubFeed;
    const items: RssFeedInterface['items'] = rss.items.map((item) => ({
      title: item.title,
      content: item.content,
      author: item.author,
      pubDate: new Date(item.isoDate),
    }));

    return RssFeed.createRssFeed({
      ...rss,
      rssLink,
      items,
      type,
      lastBuildDate: new Date(rss.lastBuildDate),
    });
  }

  if (type === FEED.NONE) {
    const rss = data as Parser.Output<Parser.Item & Record<string, any>>;
    const items: RssFeedInterface['items'] = rss.items.map((item) => ({
      title: item.title,
      content: item.content || item.contentSnippet || '',
      author: item['author'] || item.creator || '',
      pubDate: new Date(item.isoDate || item.pubDate || undefined),
    }));

    let lastBuildDate: Date;
    if (rss['lastBuildDate']) lastBuildDate = new Date(rss['lastBuildDate']);
    else lastBuildDate = new Date(Math.max(...items.map((item) => item.pubDate.getTime())));

    return RssFeed.createRssFeed({
      title: rss.title || '',
      link: rss.link || rss.feedUrl || rssLink,
      rssLink,
      items,
      type,
      lastBuildDate,
    });
  }

  throw new InternalServerErrorException('알 수 없는 RSS 피드 유형입니다.');
};

// export const toRssItem = (data: any, type: FEED): RssItem => {};
