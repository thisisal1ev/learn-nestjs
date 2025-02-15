import { Field, Float, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class FlowerModel {
	@Field(() => Int)
	id: number

	@Field()
	name: string

	@Field(() => Float)
	price: number

	@Field()
	color: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
