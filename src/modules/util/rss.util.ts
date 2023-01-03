import axios from 'axios';
import * as iconv from 'iconv-lite';
import Parser from 'rss-parser';

import { InternalServerErrorException } from '@nestjs/common';

import { RssFeed } from '~src/rss/entity/rss-feed.entity';
import { RssItem } from '~src/rss/entity/rss-item.entity';
import { FEED, GithubFeed, RssFeedInterface } from '~src/rss/rss.interface';

import { getDomainFromUrl } from '.';

export const getRssFeedType = (url: string): FEED => {
  const domain = getDomainFromUrl(url);

  if (domain.includes('github.com')) return FEED.GITHUB;

  return FEED.NONE;
};

// Rss 피드 유형에 따라 파싱
type toRssFeedParam = { rssLink: string } & Record<string, any>;
export const toRssFeed = ({ rssLink, ...data }: toRssFeedParam, type: FEED): RssFeed => {
  const feed = new RssFeed();

  if (type === FEED.GITHUB) {
    const rss = data as GithubFeed;
    const items: RssFeedInterface['items'] = rss.items.map((item) =>
      toRssItem({ ...item, feed }, type),
    );

    feed.setData({
      ...rss,
      rssLink,
      items,
      type,
      lastBuildDate: new Date(rss.lastBuildDate),
    });
    return feed;
  }

  if (type === FEED.NONE) {
    const rss = data as Parser.Output<Parser.Item & Record<string, any>>;
    const items: RssFeedInterface['items'] = rss.items.map((item) =>
      toRssItem({ ...item, feed }, type),
    );

    let lastBuildDate: Date;
    if (rss['lastBuildDate']) lastBuildDate = new Date(rss['lastBuildDate']);
    else lastBuildDate = getLastBuildDateFromRssItems(items);

    feed.setData({
      title: rss.title || '',
      link: rss.link || rss.feedUrl || rssLink,
      rssLink,
      items,
      type,
      lastBuildDate,
    });
    return feed;
  }

  throw new InternalServerErrorException('알 수 없는 RSS 피드 유형입니다.');
};

// RssItem 유형에 따라 파싱
type toRssItemParam = { feed: RssFeed } & Record<string, any>;
export const toRssItem = (data: toRssItemParam, type: FEED): RssItem => {
  if (type === FEED.GITHUB) {
    return RssItem.createRssItem({
      title: data.title,
      content: data.content,
      author: data.author,
      feed: data.feed,
      pubDate: new Date(data.isoDate),
    });
  }

  return RssItem.createRssItem({
    title: data.title,
    content: data.content || data.contentSnippet || '',
    author: data['author'] || data.creator || '',
    feed: data.feed,
    pubDate: new Date(data.isoDate || data.pubDate || undefined),
  });
};

export const getRssFeedString = (url: string) => {
  return axios
    .get<string>(url, {
      responseType: 'arraybuffer',
    })
    .then((res) => res.data)
    .then((data) =>
      data.includes(`encoding="euc-kr"`) ? iconv.decode(Buffer.from(data), 'EUC-KR') : data,
    );
};

export const getLastBuildDateFromRssItems = (rssItems: RssItem[]) => {
  return new Date(
    Math.max(
      ...rssItems.map((item) => {
        // console.log(item.pubDate);
        return item.pubDate.getTime();
      }),
    ),
  );
};
