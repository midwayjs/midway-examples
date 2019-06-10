'use strict';

import * as Sequelize from 'sequelize';
import { scope, ScopeEnum, config, provide, async, init } from 'midway';

let sequelize: Sequelize.Sequelize;

export interface IDBOptions extends Sequelize.Options {
  database: string;
  username: string;
  password: string;
}

export interface IDB {
  sequelize: Sequelize.Sequelize;
  options: IDBOptions;
}
@scope(ScopeEnum.Singleton)
@async()
@provide('mysqlDB')
export default class DB implements IDB{
  sequelize;

  @config('sequelize')
  options: IDBOptions;

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
