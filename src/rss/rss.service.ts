import axios from 'axios';
import * as iconv from 'iconv-lite';
import * as Parser from 'rss-parser';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { getRssFeedType, toRssFeed } from '~modules/util/rss.util';

import { RssFeed } from './entity/rss-feed.entity';

@Injectable()
export class RssService {
  private readonly rssParser = new Parser();

  constructor(@InjectRepository(RssFeed) private readonly rssRepository: Repository<RssFeed>) {}

  async subscribeRssFeed(rssLink: string) {
    const type = getRssFeedType(rssLink);
    const rssString = await this.getRssString(rssLink);
    const parsedRss = await this.rssParser.parseString(rssString);

    const rssFeed = toRssFeed({ ...parsedRss, rssLink }, type);
    return this.rssRepository.save(rssFeed);
  }

  async getRssById(id: number) {
    return this.rssRepository.findOne({ where: { id }, relations: ['rss_feed'] });
  }

  async getRssByTitle(title: string) {
    return this.rssRepository.findOne({ where: { title }, relations: ['rss_feed'] });
  }

  async getRssString(url: string) {
    return axios
      .get<string>(url, {
        responseType: 'arraybuffer',
      })
      .then((res) => res.data)
      .then((data) =>
        data.includes(`encoding="euc-kr"`) ? iconv.decode(Buffer.from(data), 'EUC-KR') : data,
      );
  }
}
