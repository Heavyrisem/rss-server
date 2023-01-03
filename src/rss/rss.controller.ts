import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';

import { RssService } from './rss.service';

@Controller('rss')
export class RssController {
  constructor(private readonly rssService: RssService) {}

  // TODO: validation, dto
  @Post('subscribe')
  async subscribeRssFeed(@Body('rssLink') rssLink: string) {
    return this.rssService.subscribeRssFeed(rssLink);
  }

  @Get(':id')
  async getRssFeed(@Param('id') feedId: number) {
    const feed = await this.rssService.getRssFeedById(feedId);
    if (!feed) throw new NotFoundException('Feed Not Found');
    return feed;
  }

  @Get('list')
  async getRssFeedList() {
    return this.rssService.getAllFeeds();
  }
}
