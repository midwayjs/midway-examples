import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";

import User from "../entities/User.entity";
import { CreateUserInput, UpdateUserInput } from "../dto/user.dto";

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getAllUsers(offset: number, take: number): Promise<User[]> {
    return await this.userModel.find({
      skip: offset,
      take,
      relations: ["posts", "profile"],
    });
  }

  async getUserById(id: number): Promise<User> {
    return await this.userModel.findOne(id);
  }

  async createUser(user: CreateUserInput): Promise<User> {
    return await this.userModel.save(user);
  }

  async updateUser(user: UpdateUserInput): Promise<User> {
    await this.userModel.update(user.id, user);
    return await this.getUserById(user.id);
  }

  async deleteUser(id: number) {
    return await this.userModel.delete(id);
  }
}
