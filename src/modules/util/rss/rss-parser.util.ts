import { RssFeed } from '~src/rss/entity/rss-feed.entity';
import { RssItem } from '~src/rss/entity/rss-item.entity';
import { BaseRssFeedData, GithubFeedData, YoutubeFeedData } from '~src/rss/interface/rss.interface';

import { getLastBuildDateFromRssItems } from './rss.util';

export const githubFeedParser = (feedData: GithubFeedData, rssLink: string) => {
  const rssFeed = new RssFeed();
  const { type, data } = feedData;
  const items = data.items.map((item) =>
    RssItem.createRssItem({
      ...item,
      imageSrc: item['media:thumbnail'].$.url,
      pubDate: new Date(item.isoDate),
      feed: rssFeed,
    }),
  );

  rssFeed.setData({
    ...data,
    rssLink,
    items,
    type,
    lastBuildDate: new Date(data.lastBuildDate),
  });
  return rssFeed;
};

export const youtubeFeedParser = (feedData: YoutubeFeedData, rssLink: string) => {
  const rssFeed = new RssFeed();
  const { type, data } = feedData;
  const items = data.items.map((item) =>
    RssItem.createRssItem({
      ...item,
      content: item['media:group']['media:description'][0],
      imageSrc: item['media:group']['media:thumbnail'][0]?.$.url,
      pubDate: new Date(item.isoDate),
      feed: rssFeed,
    }),
  );

  rssFeed.setData({
    ...data,
    rssLink,
    items,
    type,
    lastBuildDate: new Date(data.published),
  });
  return rssFeed;
};

export const defaultFeedParser = (feedData: BaseRssFeedData, rssLink: string) => {
  const rssFeed = new RssFeed();
  const { type, data } = feedData;
  const items = data.items.map((item) =>
    RssItem.createRssItem({
      ...item,
      title: item.title,
      content: item.content || item.contentSnippet || '',
      author: item['author'] || item.creator || '',
      pubDate: new Date(item.isoDate || item.pubDate || undefined),
      feed: rssFeed,
    }),
  );

  let lastBuildDate: Date;
  if (data['lastBuildDate']) lastBuildDate = new Date(data['lastBuildDate']);
  else lastBuildDate = getLastBuildDateFromRssItems(items);

  rssFeed.setData({
    title: data.title || '',
    link: data.link || data.feedUrl || rssLink,
    rssLink,
    items,
    type,
    lastBuildDate,
  });
  return rssFeed;
};
