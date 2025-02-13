import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { LoggerMiddleware } from './conecption/middleware'
import { FlowersModule } from './flowers/flowers.module'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), FlowersModule],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}
