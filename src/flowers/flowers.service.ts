import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { PrismaService } from '../prisma.service'
import { CreateFlowersDto } from './dto/flowers.dto'

@Injectable()
export class FlowersService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) { }

	getAll() {
		return this.prisma.flower.findMany()
	}

	create(dto: CreateFlowersDto) {
		return this.prisma.flower.create({ data: dto })
	}
}
