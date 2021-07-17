import { ServerRegistration } from 'apollo-server-koa';
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export type ExtendedConfig = DefaultConfig & {
  apollo: Omit<ServerRegistration, 'app'>;
};

export default (appInfo: EggAppInfo) => {
  const config = {} as ExtendedConfig;

  config.keys = appInfo.name + '_{{keys}}';

  config.apollo = {
    path: '/graphql',
  };

  config.security = {
    csrf: false,
  };

  return config;
};
