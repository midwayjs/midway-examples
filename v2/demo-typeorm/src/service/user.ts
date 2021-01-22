import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";

import { User } from "../entities/User.entity";

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getUser(): Promise<User[]> {
    return await this.userModel.find();
  }

  async createUser(): Promise<User> {
    return await this.userModel.save({
      name: "abc123",
    });
  }
}
