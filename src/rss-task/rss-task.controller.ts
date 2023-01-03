import { Controller, Get } from '@nestjs/common';

import { RssTaskService } from './rss-task.service';

@Controller('rss-task')
export class RssTaskController {
  constructor(private readonly rssTaskService: RssTaskService) {}

  @Get('*')
  async run() {
    return this.rssTaskService.scrapRssFeeds();
  }
}
