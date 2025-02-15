import { IsString, IsNumber } from 'class-validator'

export class CreateFlowersDto {
	id: number

	@IsString()
	name: string

	@IsString()
	color: string

	@IsNumber()
	price: number
}

export type TFlowersUpdateDto = Partial<CreateFlowersDto>