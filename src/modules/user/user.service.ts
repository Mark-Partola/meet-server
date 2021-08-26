import { Injectable } from '@nestjs/common';
import { IUser } from './domain/types';
import { users } from './fixtures';

export interface IGetUserParams {
  userId: string;
}

@Injectable()
export class UserService {
  getUser(params: IGetUserParams): IUser | null {
    return users.find((it) => it.id === params.userId);
  }
}
