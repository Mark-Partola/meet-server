import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { IEvent } from '../domain/types';
import { EventService } from '../event.service';
import { IGetEventRequest, IJoinEventRequest } from './types';

@Controller()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/events/:eventId')
  getEvent(@Param() params: IGetEventRequest): IEvent {
    const event = this.eventService.getEvent(params);

    if (!event) {
      throw new NotFoundException();
    }

    return event;
  }

  @Get('/events/')
  getEvents(): IEvent[] {
    return this.eventService.getEvents();
  }

  @Post('/events/:eventId/participants')
  join(@Param() params: IJoinEventRequest) {
    try {
      return this.eventService.join(params);
    } catch (e) {
      throw new BadRequestException({
        message: e.message,
      });
    }
  }
}
