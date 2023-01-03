import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '~modules/database/database.module';

import { RssFeed } from './entity/rss-feed.entity';
import { RssItem } from './entity/rss-item.entity';
import { RssController } from './rss.controller';
import { RssService } from './rss.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([RssFeed, RssItem])],
  providers: [RssService],
  controllers: [RssController],
  exports: [RssService, TypeOrmModule.forFeature([RssFeed, RssItem])],
})
export class RssModule {}
