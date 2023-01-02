import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '~modules/database/database.module';

import { RssFeed } from './entity/rss-feed.entity';
import { RssController } from './rss.controller';
import { RssService } from './rss.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([RssFeed])],
  providers: [RssService],
  controllers: [RssController],
})
export class RssModule {}
