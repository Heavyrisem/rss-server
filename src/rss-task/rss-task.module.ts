import { Module } from '@nestjs/common';

import { RssModule } from '~src/rss/rss.module';

import { RssTaskController } from './rss-task.controller';
import { RssTaskService } from './rss-task.service';

@Module({
  imports: [RssModule],
  providers: [RssTaskService],
  controllers: [RssTaskController],
})
export class RssTaskModule {}
