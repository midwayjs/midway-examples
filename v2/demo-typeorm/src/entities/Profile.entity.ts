import { EntityModel } from "@midwayjs/orm";
import { PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";

import User from "./User.entity";

@EntityModel()
export default class Profile {
  @PrimaryGeneratedColumn()
  profileId: number;

  @Column()
  description: string;

  @OneToOne((type) => User, (user) => user.profile, {
    onDelete: "SET NULL",
  })
  user: User;
}
