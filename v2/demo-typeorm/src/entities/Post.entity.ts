import { EntityModel } from "@midwayjs/orm";
import { PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import User from "./User.entity";

@EntityModel()
export default class Post {
  @PrimaryGeneratedColumn()
  postId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "SET NULL",
  })
  author: User;
}
