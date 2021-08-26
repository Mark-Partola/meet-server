import { Module } from '@nestjs/common';
import { UserModule } from '../user';
import { EventController } from './controller/event.controller';
import { EventService } from './event.service';

@Module({
  imports: [UserModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
