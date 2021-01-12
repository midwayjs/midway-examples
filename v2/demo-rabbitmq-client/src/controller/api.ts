import { Inject, Controller, Get, Provide } from '@midwayjs/decorator';
import { Context } from 'egg';
import { RabbitmqService } from '../service/rabbitmq'

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  rabbitmqService: RabbitmqService;

  @Get('/sendToQueue')
  async getUser() {
    const res = await this.rabbitmqService.sendToQueue('hello world');
    return { success: true, message: 'OK', data: res };
  }
}
