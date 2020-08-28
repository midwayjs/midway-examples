import { provide, scope, ScopeEnum, config } from 'midway';
import { PostSchema } from './post';
let mongoose = require('mongoose');

interface IMongoConfig {
  url: string,
  options: {},
  plugins: [],
}

@scope(ScopeEnum.Singleton)
@provide('MDB')
export class MDB {

  @config('mongoose')
  mConfig: IMongoConfig;

  static mongooseFun: any;
  static initDB(config: IMongoConfig) {
    MDB.mongooseFun = mongoose.connect('mongodb://127.0.0.1:27017/scm', { useNewUrlParser: true }, function (err: any) {
        if (err) {
            console.log('initDB err', err);
            return
        }
        console.log('Mongodb DB connection success');
    })
    mongoose.model("my_posts_table", PostSchema, 'my_posts_table');
  };
}
