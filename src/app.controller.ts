import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get()
	sendMessage() {
		this.appService.sendMessage()
		return 'Message send!'
	}
}