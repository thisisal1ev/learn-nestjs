import { Controller, Get, ParseIntPipe, Query, UseGuards, UseInterceptors } from '@nestjs/common'

import { AuthGuard } from 'src/conecption/authGuard'
import { LoggingInterceptor } from 'src/conecption/interceptor'
import { FlowersService } from './flowers.service'

@Controller('flowers')
@UseInterceptors(LoggingInterceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get()
  @UseGuards(AuthGuard)
  getAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber)
    return this.flowersService.getAll()
  }
}
