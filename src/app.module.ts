import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ConfigurationModule } from './modules/config/config.module';
import { LoggerMiddleware } from './modules/logging/logger.middleware';
import { RssTaskService } from './rss-task/rss-task.service';
import { RssModule } from './rss/rss.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigurationModule, UserModule, RssModule],
  controllers: [],
  providers: [RssTaskService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
