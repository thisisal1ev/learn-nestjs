import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'

import { LoggerMiddleware } from './conecption/middleware'
import { FlowersModule } from './flowers/flowers.module'

@Module({
  imports: [FlowersModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}
