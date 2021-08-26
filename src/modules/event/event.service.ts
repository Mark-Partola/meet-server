import { Injectable } from '@nestjs/common';
import { IUserId } from '../user/domain/types';
import { UserService } from '../user/user.service';
import { IEvent, IEventId } from './domain/types';
import { events } from './fixtures';

export interface IGetEventParams {
  eventId: string;
}

export interface IJoinParams {
  eventId: IEventId;
}

@Injectable()
export class EventService {
  // TODO: make it without hard relation
  constructor(private readonly userService: UserService) {}

  getEvents() {
    return events;
  }

  getEvent(params: IGetEventParams): IEvent | null {
    return events.find((it) => it.id === params.eventId);
  }

  join(params: IJoinParams) {
    const AUTHORIZED_USER_ID = '1';

    const event = this.getEvent({ eventId: params.eventId });
    const user = this.userService.getUser({ userId: AUTHORIZED_USER_ID });

    if (!event) {
      throw new Error('Event is not specified');
    }

    if (!user) {
      throw new Error('User is not specified');
    }

    event.join(user);
  }
}
