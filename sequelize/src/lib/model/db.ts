'use strict';

import * as Sequelize from 'sequelize';
import { scope, ScopeEnum, config, provide, async, init } from 'midway';

let sequelize: Sequelize.Sequelize;

@scope(ScopeEnum.Singleton)
@async()
@provide('mysqlDB')
export default class DB {
  sequelize;

  @config('sequelize')
  options;

  @init()
  connect() {
    sequelize = new Sequelize(
      this.options.database,
      this.options.username,
      this.options.password,
      {
        dialect: this.options.dialect,
        host: this.options.host,
        port: this.options.port,
        timezone: '+08:00',
        logging: false,
      },
    );
    this.sequelize = sequelize;
  }
}
