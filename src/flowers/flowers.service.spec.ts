import { ConfigService } from '@nestjs/config'
import { Test } from '@nestjs/testing'

import { PrismaService } from '../prisma.service'
import { FlowersService } from './flowers.service'

describe('Flowers service', () => {
	let service: FlowersService

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [
				FlowersService,
				{
					provide: PrismaService,
					useValue: {
						flower: {
							findMany: jest.fn().mockReturnValue([
								{
									id: 1,
									name: 'Rose',
									color: 'Red',
									price: 5
								}
							]),
							create: jest.fn().mockReturnValue({
								id: 2,
								name: 'Lilly',
								color: 'White',
								price: 7
							})
						},
					},
				},
				{
					provide: ConfigService,
					useValue: {}
				},
			]
		}).compile()

		service = module.get<FlowersService>(FlowersService)
	})

	it('should return an array of flowers', async () => {
		expect(await service.getAll()).toEqual([
			{
				id: 1,
				name: 'Rose',
				color: 'Red',
				price: 5
			}
		])
	})

	it('should create a new flower', async () => {
		expect(await service.create(
			{
				id: 2,
				name: 'Lilly',
				color: 'White',
				price: 7
			}
		)).toEqual(
			{
				id: 2,
				name: 'Lilly',
				color: 'White',
				price: 7
			}
		)
	})
})