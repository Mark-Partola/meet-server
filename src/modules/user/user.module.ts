import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
