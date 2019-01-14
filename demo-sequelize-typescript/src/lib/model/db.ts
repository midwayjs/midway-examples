import { Sequelize } from 'sequelize-typescript';
import { provide, scope, ScopeEnum } from 'midway';
import { PostModel } from './post';

interface ISequelizeConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  dialect: string;
}

// providing DB.sequelize in case of hyper features
// of sequelize like "sequelize.transaction"
@scope(ScopeEnum.Singleton)
@provide('DB')
export class DB {
  public static sequelize: Sequelize;

  public static async initDB(config: ISequelizeConfig) {
    DB.sequelize = new Sequelize(
      {
        database: config.database,
        username: config.user,
        password: config.password,
        dialect: config.dialect,
        host: config.host,
        port: config.port,
        timezone: '+08:00',
        logging: false,
        operatorsAliases: false,
      },
    );

    // add models here before using them
    DB.sequelize.addModels([
      PostModel,
    ]);

    try {
      await DB.sequelize.authenticate();
    } catch (error) {
      error.message = `DB connection error: ${error.message}`;
      throw error;
    }
  }
}
