import { providerWrapper } from 'midway';
import { BIGINT, DATE, INTEGER, STRING, TEXT, Model } from 'sequelize';
import { IDB } from './db';
import { SequelizeAttributes } from '../../types';

export interface IPostAttributes {
  id: number;
  title: String;
  content: String;
  status: number;
  created_at: Date;
  updated_at: Date;
}

export type IPostModel = typeof Model;

providerWrapper([
  {
    id: 'PostModel',
    provider: setupModel,
  },
]);

export default async function setupModel(context) {
  const db: IDB = await context.getAsync('DB');
  const attributes: SequelizeAttributes<IPostAttributes>  = {
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
