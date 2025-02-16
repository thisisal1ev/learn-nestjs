import { Module } from '@nestjs/common'

import { FlowersService } from '../flowers/flowers.service'
import { PrismaService } from '../prisma.service'
import { FlowersGraphqlResolver } from './flowers-graphql.resolver'

@Module({
  providers: [FlowersGraphqlResolver, FlowersService, PrismaService],
})
export class FlowersGraphqlModule { }
