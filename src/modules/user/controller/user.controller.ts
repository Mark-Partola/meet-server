import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { IUser } from '../domain/types';
import { UserService } from '../user.service';
import { IGetUserRequest } from './types';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/users/:userId')
  getUser(@Param() params: IGetUserRequest): IUser {
    const user = this.userService.getUser(params);

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
