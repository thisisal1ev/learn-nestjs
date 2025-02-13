import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class FlowersService {
	constructor(private readonly prisma: PrismaService) { }

	getAll() {
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
}
