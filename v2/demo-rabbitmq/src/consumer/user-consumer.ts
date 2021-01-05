import { Provide, Consumer, MSListenerType, RabbitMQListener, Inject } from '@midwayjs/decorator';
import { IMidwayRabbitMQContext } from '@midwayjs/rabbitmq';
import { ConsumeMessage } from 'amqplib';

@Provide()
@Consumer(MSListenerType.RABBITMQ)
export class UserConsumer {

  @Inject()
  ctx: IMidwayRabbitMQContext;

  @RabbitMQListener('demo')
  async gotData(msg: ConsumeMessage) {
    console.log("=======")
    console.log(msg.content.toString())
    this.ctx.channel.ack(msg);
  }

}
