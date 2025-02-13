import { Module } from '@nestjs/common';
import { MicroservicesService } from './microservices.service';
import { MicroservicesController } from './microservices.controller';

@Module({
  controllers: [MicroservicesController],
  providers: [MicroservicesService],
})
export class MicroservicesModule {}
