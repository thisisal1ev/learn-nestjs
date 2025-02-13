import { Module } from '@nestjs/common'
import { FlowersService } from './flowers.service'
import { FlowersController } from './flowers.controller'
import { PrismaService } from 'src/prisma.service'
import { ConfigService } from '@nestjs/config'

@Module({
  controllers: [FlowersController],
  providers: [FlowersService, PrismaService, ConfigService],
})
export class FlowersModule { }
