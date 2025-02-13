import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from 'src/prisma.service'
import { EnumAppMode } from 'src/types'
import { CreateFlowersDto } from './dto/flowers.dto'

@Injectable()
export class FlowersService {
	constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) { }

	getAll() {
		console.log(this.configService.get<EnumAppMode>('MODE'))
		return this.prisma.flower.findMany()

		// return [
		// 	{
		// 		name: 'Rose',
		// 		color: 'Red',
		// 		price: 5
		// 	},
		// 	{
		// 		name: 'Lily',
		// 		color: 'White',
		// 		price: 6
		// 	},
		// 	{
		// 		name: 'Tulip',
		// 		color: 'Yellow',
		// 		price: 7
		// 	},
		// ]
	}

	create(dto: CreateFlowersDto) {
		return this.prisma.flower.create({ data: dto })
	}
}
