import { Body, Controller, Post } from '@nestjs/common';

import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private readonly rssService: RssService) {}

  // TODO: validation, dto
  @Post('subscribe')
  async subscribeRssFeed(@Body('rssLink') rssLink: string) {
    return this.rssService.subscribeRssFeed(rssLink);
  }
}
