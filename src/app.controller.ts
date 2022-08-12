import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hello')
  getHello(@Payload('msg') msg: string, @Ctx() context: RedisContext): string {
    console.log(`FROM HTTP: ${msg}`);
    return this.appService.getHello();
  }
}
