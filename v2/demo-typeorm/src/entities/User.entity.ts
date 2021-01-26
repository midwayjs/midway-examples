import { EntityModel } from "@midwayjs/orm";
import {
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  JoinColumn,
  BaseEntity,
} from "typeorm";

import Profile from "./Profile.entity";

import Post from "./Post.entity";

@EntityModel()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne((type) => Profile, (profile) => profile.user, {
    cascade: true,
  })
  @JoinColumn()
  profile: Profile;

  @OneToMany((type) => Post, (post) => post.author, {
    cascade: true,
  })
  posts: Post[];
}
