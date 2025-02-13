import { Injectable } from '@nestjs/common'

@Injectable()
export class FlowersService {
	getAll() {
		return [
			{
				name: 'Rose',
				color: 'Red',
				price: 5
			},
			{
				name: 'Lily',
				color: 'White',
				price: 6
			},
			{
				name: 'Tulip',
				color: 'Yellow',
				price: 7
			},
		]
	}
}
