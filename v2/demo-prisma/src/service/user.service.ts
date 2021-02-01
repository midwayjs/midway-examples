import { Provide, Inject } from "@midwayjs/decorator";

import { PrismaClient, User } from "../prisma/client";

import { CreateUserInput, UpdateUserInput } from "../dto/user.dto";

@Provide()
export class UserService {
  @Inject("prisma")
  prismaClient: PrismaClient;

  async getAllUsers(offset: number, take: number): Promise<User[]> {
    const res = await this.prismaClient.user.findMany({
      skip: offset,
      take,
    });

    return res;
  }

  async getUserById(id: number): Promise<User> {
    const res = await this.prismaClient.user.findUnique({ where: { id } });
    return res;
  }

  async createUser(createParams: CreateUserInput): Promise<User> {
    const res = await this.prismaClient.user.create({
      data: createParams,
    });
    return res;
  }

  async updateUser(updateParams: UpdateUserInput): Promise<User> {
    const res = await this.prismaClient.user.update({
      where: { id: updateParams.id },
      data: updateParams,
    });

    return res;
  }

  async deleteUser(id: number): Promise<User> {
    const res = await this.prismaClient.user.delete({ where: { id } });
    return res;
  }
}
