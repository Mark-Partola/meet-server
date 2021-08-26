import { IUser, IUserId } from '../../user/domain/types';
import { IEvent, IEventData, IEventRestriction } from './types';

export type IEventConstructorParams = Omit<IEventData, 'participants'>;

export class Event implements IEvent {
  public readonly id: string;

  public readonly title: string;

  public readonly description: string;

  public readonly participants: IUserId[] = [];

  public readonly restrictions: IEventRestriction;

  public constructor(params: IEventConstructorParams) {
    Object.assign(this, params);

    this.restrictions = {
      participantsLimit: params.restrictions?.participantsLimit || Infinity,
      minAge: params.restrictions?.minAge || 0,
      maxAge: params.restrictions?.maxAge || Infinity,
    };
  }

  public join(user: IUser): void {
    if (this.participants.includes(user.id)) {
      throw new ParticipantAlreadyJoinedException();
    }

    if (this.participants.length >= this.restrictions.participantsLimit) {
      throw new ParticipantsLimitException();
    }

    if (
      user.profile.age < this.restrictions.minAge ||
      user.profile.age > this.restrictions.maxAge
    ) {
      throw new ParticipantAgeException();
    }

    this.participants.push(user.id);
  }
}

export class ParticipantAlreadyJoinedException extends Error {
  message = 'Participant already joined';
}

export class ParticipantsLimitException extends Error {
  message = 'Participants limit';
}

export class ParticipantAgeException extends Error {
  message = 'Participant age is not match';
}
