import { Test } from '@nestjs/testing'

import { FlowersController } from './flowers.controller'
import { FlowersService } from './flowers.service'

describe('FlowersController', () => {
	let controller: FlowersController

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			controllers: [FlowersController],
			providers: [
				{
					provide: FlowersService,
					useValue: {
						getAll: jest.fn().mockReturnValue([
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
					}
				}
			]
		}).compile()

		controller = module.get<FlowersController>(FlowersController)
	})

	it('should return an array of flowers', async () => {
		expect(await controller.getAll()).toEqual([
			{
				id: 1,
				name: 'Rose',
				color: 'Red',
				price: 5
			}
		])
	})

	it('should create a new flower', async () => {
		expect(await controller.create(
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