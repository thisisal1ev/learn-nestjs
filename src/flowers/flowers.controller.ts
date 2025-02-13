import { Controller, Get, ParseIntPipe, Query, UseGuards } from '@nestjs/common'

import { FlowersService } from './flowers.service'
import { AuthGuard } from 'src/conecption/authGuard'

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) { }

  @Get()
  @UseGuards(AuthGuard)
  getAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber)
    return this.flowersService.getAll()
  }
}
