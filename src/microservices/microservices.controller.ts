import { Controller } from '@nestjs/common'
import { MicroservicesService } from './microservices.service'
import { EventPattern } from '@nestjs/microservices'

@Controller()
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) { }

  @EventPattern('message')
  handleMessage(message: string) {
    this.microservicesService.handleMessage(message)
  }
}
