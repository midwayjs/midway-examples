import * as Sequelize from 'sequelize';
import { providerWrapper } from 'midway';
import { IDB } from './db';
import { SequelizeAttributes } from '../../types';

export interface IPostAttributes {
  id: number;
  title: String;
  content: String;
  user_id: number;
  created_at: Date;
  updated_at: Date;
}

export interface IPostInstance extends Sequelize.Instance<IPostAttributes>, IPostAttributes {}

export interface IPostModel extends Sequelize.Model<IPostInstance, IPostAttributes> { }

providerWrapper([
  {
    id: 'postModel',
    provider: setupModel,
  },
]);

export default async function setupModel(context) {
  const db: IDB = await context.getAsync('mysqlDB');
  const { STRING, INTEGER, DATE } = Sequelize;
  const attributes: SequelizeAttributes<IPostAttributes> = {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: STRING(30),
    content: STRING(255),
    user_id: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  };
  const Post = db.sequelize.define<IPostInstance, IPostAttributes>(
    'post',
    attributes,
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );

  return Post;
}
