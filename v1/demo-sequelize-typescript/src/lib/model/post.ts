import { DataType, Table, Model, Column, CreatedAt, UpdatedAt, Scopes } from 'sequelize-typescript';
import { providerWrapper } from 'midway';

const {STRING, TEXT, INTEGER, BIGINT} = DataType;

// using factory style to provide Model because most useful
// sequelize methods are static in Model class. If you use
// @provide style, this class will be initialized when injected.
export const factory = () => PostModel;
providerWrapper([
  {
    id: 'PostModel',
    provider: factory,
  },
]);
// you need to export the type of Model class to ensure
// type-safety outside
export type IPostModel = typeof PostModel;

@Scopes({
  // a self-defined scope means "non-soft-deleted rows"
  avaliable: {
    where: {status: 1},
  },
})
@Table({
  // you can claim your tableName explicitly
  freezeTableName: true,
  tableName: 'my_posts_table',
})
export class PostModel extends Model<PostModel> {

  @Column({
    type: BIGINT(20),
    primaryKey: true,
    autoIncrement: true,
    comment: 'post id',
  })
  id: number;

  @Column({
    type: STRING(1024),
    allowNull: false,
    comment: 'post title',
  })
  title: string;

  @Column({
    field: 'post_content', // alias your field
    type: TEXT,
    allowNull: true,
    comment: 'post content',
  })
  postContent: string;

  @Column({
    type: INTEGER(11),
    allowNull: false,
    defaultValue: 1,
    comment: 'soft delete status', // 0-deleted 1-normal
  })
  status: number;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdTime: Date;

  @UpdatedAt
  @Column({ field: 'modified_at' })
  modifiedTime: Date;
}
