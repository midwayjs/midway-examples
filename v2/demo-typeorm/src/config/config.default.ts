import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";
import { ConnectionOptions } from "typeorm";

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_{{keys}}";

  // add your config here
  config.middleware = [];

  config.orm = {
    type: "sqlite",
    name: "default",
    database: "db.sqlite",
    synchronize: true,
    dropSchema: true,
    logger: "advanced-console",
    entities: ["../entities/*"],
  } as ConnectionOptions;

  config.security = {
    csrf: false,
  };

  return config;
};
