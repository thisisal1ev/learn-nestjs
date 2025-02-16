import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PrismaService } from '../prisma.service'
import { FlowersController } from './flowers.controller'
import { FlowersService } from './flowers.service'

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigService],
  exports: [FlowersService]
})
export class FlowersModule { }
