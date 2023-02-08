import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAll() {
    return 'server started';
  }
}
