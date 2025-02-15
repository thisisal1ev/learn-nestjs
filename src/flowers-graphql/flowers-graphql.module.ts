import { Module } from '@nestjs/common'

import { FlowersService } from 'src/flowers/flowers.service'
import { PrismaService } from 'src/prisma.service'
import { FlowersGraphqlResolver } from './flowers-graphql.resolver'

@Module({
  providers: [FlowersGraphqlResolver, FlowersService, PrismaService],
})
export class FlowersGraphqlModule { }
