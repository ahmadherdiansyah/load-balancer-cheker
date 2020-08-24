import { Controller, Get, Request } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'os';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req:any) {
    return {
      originIP: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      MachineIp: os.networkInterfaces(),
      hostname: os.hostname()
    };
  }
}
