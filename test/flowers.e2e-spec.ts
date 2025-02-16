import { INestApplication, ValidationPipe } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'

import { AppModule } from '../src/app.module'

describe('FlowerController (e2e)', () => {
	let app: INestApplication

	beforeAll(async () => {
		const moduleMixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile()

		app = moduleMixture.createNestApplication()
		app.useGlobalPipes(new ValidationPipe())
		await app.init()
	})

	it('/flowers (GET)', () => {
		return request(app.getHttpServer()).get('/flowers')
			.expect(200)
			.expect([
				{
					id: 1,
					name: 'Tulip',
					color: 'Yellow',
					price: 7,
					createdAt: '2025-02-13T14:14:40.365Z',
					updatedAt: '2025-02-13T14:14:40.365Z'
				},
				{
					id: 2,
					name: 'Lily',
					color: 'White',
					price: 6,
					createdAt: '2025-02-13T14:15:18.038Z',
					updatedAt: '2025-02-13T14:15:18.038Z'
				},
				{
					id: 3,
					name: 'Rose',
					color: 'Red',
					price: 5,
					createdAt: '2025-02-13T14:15:29.399Z',
					updatedAt: '2025-02-13T14:15:29.399Z'
				},
				{
					id: 4,
					name: 'Sunflower',
					color: 'Yellow',
					price: 7,
					createdAt: '2025-02-16T11:57:54.201Z',
					updatedAt: '2025-02-16T11:57:54.201Z'
				},
				{
					id: 5,
					name: 'Flower',
					color: 'Yellow',
					price: 8,
					createdAt: '2025-02-16T11:57:54.201Z',
					updatedAt: '2025-02-16T11:57:54.201Z'
				}
			])
	})

	it('/flowers (POST)', () => {
		return request(app.getHttpServer())
			.post('/flowers')
			.send(
				{
					id:6,
					name: 'Power flower',
					color: 'Yellow',
					price: 15,
				}
			)
			.expect(201)
			.expect(
				{
					id: 6,
					name: 'Power flower',
					color: 'Yellow',
					price: 15,
					createdAt: "2025-02-13T14:15:29.399Z",
					updatedAt: "2025-02-13T14:15:29.399Z"
				}
			)
	})

	afterAll(async () => {
		await app.close()
	})
})
