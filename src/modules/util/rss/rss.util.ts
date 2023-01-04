import axios from 'axios';
import * as iconv from 'iconv-lite';
import * as Parser from 'rss-parser';

import { InternalServerErrorException } from '@nestjs/common';

import { RssFeed } from '~src/rss/entity/rss-feed.entity';
import { RssItem } from '~src/rss/entity/rss-item.entity';
import {
  GithubFeed,
  GithubItem,
  githubCustomFields,
} from '~src/rss/interface/feed/github.interface';
import {
  youtubeCustomFields,
  YoutubeFeed,
  YoutubeItem,
} from '~src/rss/interface/feed/youtube.interface';
import { FEED, RssFeedData } from '~src/rss/interface/rss.interface';

import { getDomainFromUrl } from '../common.util';

import { defaultFeedParser, githubFeedParser, youtubeFeedParser } from './rss-parser.util';

export const getRssFeedType = (url: string): FEED => {
  const domain = getDomainFromUrl(url);

  if (process.env.NODE_ENV !== 'production') {
    if (url.includes('/rss-mock/github')) return FEED.GITHUB;
    if (url.includes('/rss-mock/youtube')) return FEED.YOUTUBE;
  }

  if (domain.includes('github.com')) return FEED.GITHUB;
  if (domain.includes('youtube.com')) return FEED.YOUTUBE;

  return FEED.NONE;
};

export const getRssFeedData = async (url: string, type: FEED): Promise<RssFeedData> => {
  const responseStr = await axios
    .get<string>(url, {
      responseType: 'arraybuffer',
    })
    .then((res) => res.data)
    .then((data) =>
      data.includes(`encoding="euc-kr"`) ? iconv.decode(Buffer.from(data), 'EUC-KR') : data,
    );

  if (type === FEED.GITHUB) {
    const parser = new Parser<GithubFeed, GithubItem>({
      customFields: githubCustomFields,
    });
    return { data: await parser.parseString(responseStr), type };
  }

  if (type === FEED.YOUTUBE) {
    const parser = new Parser<YoutubeFeed, YoutubeItem>({
      customFields: youtubeCustomFields,
    });
    return { data: await parser.parseString(responseStr), type };
  }

  const parser = new Parser();
  return { data: await parser.parseString(responseStr), type };
};

// Rss 피드 유형에 따라 파싱
export const toRssFeed = (feedData: RssFeedData, rssLink: string): RssFeed => {
  switch (feedData.type) {
    case FEED.GITHUB:
      return githubFeedParser(feedData, rssLink);
    case FEED.YOUTUBE:
      return youtubeFeedParser(feedData, rssLink);
    case FEED.NONE:
      return defaultFeedParser(feedData, rssLink);
    default:
      throw new InternalServerErrorException('알 수 없는 RSS 피드 유형입니다.');
  }
};

export const getLastBuildDateFromRssItems = (rssItems: RssItem[]) =>
  new Date(Math.max(...rssItems.map((item) => item.pubDate.getTime())));
