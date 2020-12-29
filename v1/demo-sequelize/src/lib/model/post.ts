import { IApplicationContext, providerWrapper } from 'midway';
import { BIGINT, DATE, INTEGER, Model, STRING, TEXT } from 'sequelize';
import { IDB } from './db';

providerWrapper([
  {
    id: 'PostModel',
    provider: setupModel,
  },
]);

export interface IPostAttributes {
  id: number;
  title: String;
  content: String;
  status: number;
  created_at: Date;
  updated_at: Date;
}

export type IPostResult<T> = Model<any, T> & T;
export type IModel<K extends IPostResult<T>, T> = typeof Model & (new () => K);

export type IPostModelResult = IPostResult<IPostAttributes>;
export type IPostModel = IModel<IPostModelResult, IPostAttributes>;

export default async function setupModel(context: IApplicationContext) {
  const db: IDB = await context.getAsync('DB');
  const attributes = {
    id: {
      type: BIGINT,
      primaryKey: true,
      autoIncrement: true,
      comment: 'post id',
    },
    title: {
      type: STRING,
      allowNull: false,
      comment: 'post title',
    },
    content: {
      field: 'content', // alias your field
      type: TEXT,
      allowNull: true,
      comment: 'post content',
    },
    status: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 1,
      comment: 'soft delete status', // 0-deleted 1-normal
    },
    created_at: DATE,
    updated_at: DATE,
  };
  const Post = db.sequelize.define('post_table', attributes, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: false,
    tableName: 'post_table',
  });

  return Post;
}
