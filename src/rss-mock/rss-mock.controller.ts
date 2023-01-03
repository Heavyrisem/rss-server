import { Controller, Get } from '@nestjs/common';

import { githubRssFeedMock } from './mock/github.mock';
import { youtubeRssFeedMock } from './mock/youtube.mock';

@Controller('rss-mock')
export class RssMockController {
  @Get('youtube')
  youtubeRssFeedMock() {
    return youtubeRssFeedMock;
  }

  @Get('github')
  githubRssFeedMock() {
    return githubRssFeedMock;
  }
}
