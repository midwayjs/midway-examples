import { ServerRegistration } from "apollo-server-koa";
import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_{{keys}}";

  config.apollo = {
    path: "/graphql",
  } as ServerRegistration;

  config.security = {
    csrf: false,
  };

  return config;
};
