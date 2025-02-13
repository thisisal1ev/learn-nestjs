import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ClientsModule, Transport } from '@nestjs/microservices'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './conecption/middleware'
import { FlowersModule } from './flowers/flowers.module'
import { MicroservicesModule } from './microservices/microservices.module'

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }), FlowersModule, MicroservicesModule, ClientsModule.register([
    {
      name: 'ORDER_SERVICE', transport: Transport.TCP, options: {
        host: 'localhost',
        port: 8877
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}
