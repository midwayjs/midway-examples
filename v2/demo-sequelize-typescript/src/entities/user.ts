import { Model, Table, Column, HasMany}  from 'sequelize-typescript';

import { Post } from './post';

@Table
export class User extends Model {

  @Column name!: string;
  @HasMany(() => Post) posts: Post[];

}