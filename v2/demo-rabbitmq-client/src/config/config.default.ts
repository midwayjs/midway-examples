import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1610364674213_3285';

  // add your config here
  config.middleware = [];

  config.rabbitmq = "amqp://localhost:5672"

  config.mqConfig = 'demo'

  return config;
};
