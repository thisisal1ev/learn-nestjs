import { Injectable } from '@nestjs/common'
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices'

@Injectable()
export class AppService {
	private client: ClientProxy

	constructor() {
		this.client = ClientProxyFactory.create({
			transport: Transport.TCP,
			options: {
				port: 8877,
				host: 'localhost'
			}
		})
	}

	sendMessage() {
		this.client.emit('message', 'New order #42!')
	}
}