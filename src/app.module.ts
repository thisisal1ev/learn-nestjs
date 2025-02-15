import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoggerMiddleware } from './conecption/middleware'
import { FlowersModule } from './flowers/flowers.module'
import { MicroservicesModule } from './microservices/microservices.module'
import { FlowersGraphqlModule } from './flowers-graphql/flowers-graphql.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
    FlowersModule,
    MicroservicesModule,
  ClientsModule.register([
    {
      name: 'ORDER_SERVICE', transport: Transport.TCP, options: {
        host: 'localhost',
        port: 8877
      }
    },
  ]),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true
  }),
  FlowersGraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('flowers')
  }
}
