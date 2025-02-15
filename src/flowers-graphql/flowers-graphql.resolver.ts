import { Query, Resolver } from '@nestjs/graphql'

import { FlowersService } from 'src/flowers/flowers.service'
import { FlowerModel } from './flower.model'

@Resolver()
export class FlowersGraphqlResolver {
  constructor(private readonly flowersService: FlowersService) { }

  @Query(() => [FlowerModel], { name: 'flowers' })
  getAll() {
    return this.flowersService.getAll()
  }
}
