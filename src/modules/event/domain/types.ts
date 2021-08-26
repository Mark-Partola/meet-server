import { IUser, IUserId } from '../../user/domain/types';

export interface IEventData {
  id: IEventId;
  title: string;
  description: string;
  participants: IUserId[];
  restrictions?: IEventRestriction;
}

export interface IEventRestriction {
  participantsLimit?: number;
  minAge?: number;
  maxAge?: number;
}

export interface IEvent extends IEventData {
  join: (user: IUser) => void;
}

export type IEventId = string;
