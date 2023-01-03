import {
  ClassSerializerInterceptor,
  MiddlewareConsumer,
  Module,
  NestModule,
  ValidationPipe,
} from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';

import { ConfigurationModule } from './modules/config/config.module';
import { LoggerMiddleware } from './modules/logging/logger.middleware';
import { RssMockModule } from './rss-mock/rss-mock.module';
import { RssTaskModule } from './rss-task/rss-task.module';
import { RssModule } from './rss/rss.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigurationModule,
    UserModule,
    RssModule,
    RssTaskModule,
    ScheduleModule.forRoot(),
    process.env.NODE_ENV !== 'production' && RssMockModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
