import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './modules/event';
import { UserModule } from './modules/user';

@Module({
  imports: [UserModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
