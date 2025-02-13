import { Injectable } from '@nestjs/common'

@Injectable()
export class MicroservicesService {
	handleMessage(message: string) {
		console.log('microservice: ', message)
	}
}
