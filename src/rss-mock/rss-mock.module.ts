import { Module } from '@nestjs/common';

import { RssMockController } from './rss-mock.controller';

@Module({
  controllers: [RssMockController],
})
export class RssMockModule {}
