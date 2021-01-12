import { Provide, Scope, ScopeEnum, Init, Config} from '@midwayjs/decorator';
import * as amqp from 'amqplib'

@Scope(ScopeEnum.Singleton) // Singleton 单例，全局唯一（进程级别）
@Provide('rabbitmqService')
export class RabbitmqService {
  @Config('rabbitmq')
  options;

  @Config('mqConfig')
  mqConfig;

  client;

  channel;

  async getMQConnection(options) {
    let connection = await amqp.connect(options)
    this.channel = await connection.createChannel();
    await this.channel.assertQueue(this.mqConfig);
    return connection;
  }

  async sendToQueue(message) {
    return await this.channel.sendToQueue(this.mqConfig, Buffer.from(message), {
      // RabbitMQ关闭时，消息会被保存到磁盘
      persistent: true
  });
  }

  @Init()
  async connect() {
    this.client = await this.getMQConnection(this.options)
  }
}
