import { async, config, init, provide, scope, ScopeEnum } from 'midway';
import { Options, Sequelize } from 'sequelize';

export interface IDBOptions extends Options {
  database: string;
  username: string;
  password: string;
}

export interface IDB {
  sequelize: Sequelize;
  options: IDBOptions;
}
@scope(ScopeEnum.Singleton)
@async()
@provide('DB')
export default class DB implements IDB {
  public sequelize: Sequelize;

  @config('sequelize')
  public options: IDBOptions;

  @init()
  public connect() {
    this.sequelize = new Sequelize(
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
  }
}
