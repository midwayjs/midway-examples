import * as Sequelize from 'sequelize';
import { providerWrapper } from 'midway';

providerWrapper([
  {
    id: 'postModel',
    provider: setupModel,
  },
]);

export default async function setupModel(context) {
  const db = await context.getAsync('mysqlDB');
  const { STRING, INTEGER, DATE } = Sequelize;

  // tslint:disable-next-line
  const Post = db.sequelize.define(
    'post',
    {
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
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  );

  return Post;
}
