import {
  Inject,
  Controller,
  Get,
  Provide,
  Post,
  Param,
  Body,
  ALL,
  Validate,
  Query,
} from "@midwayjs/decorator";

import { ValidationError } from "joi";
import { Context } from "egg";

import {
  CreateUserInput,
  UpdateUserInput,
  UserPaginationInput,
} from "../dto/user.dto";

import { UserService } from "../service/user.service";

@Provide()
@Controller("/api")
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get("/users")
  async getAllUser(
    @Query(ALL) { offset: reqOffset, take: reqTake }: UserPaginationInput
  ) {
    const offset = Number(reqOffset ?? 0);
    const take = Number(reqTake ?? 10);
    const users = await this.userService.getAllUsers(offset, take);
    return { success: true, message: "OK", data: users };
  }

  @Get("/user/:id")
  async getUserById(@Param() id: number) {
    const user = await this.userService.getUserById(Number(id));
    return { success: true, message: "OK", data: user ?? {} };
  }

  @Post("/user/create")
  @Validate()
  async createUser(@Body(ALL) createParam: CreateUserInput) {
    try {
      const user = await this.userService.createUser(createParam);
      return { success: true, message: "OK", data: user };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, message: "Params Validation Error", data: {} };
      } else {
        return { success: false, message: "Unknown Errors", data: {} };
      }
    }
  }

  @Post("/user/update")
  @Validate()
  async updateUser(@Body(ALL) updateParam: UpdateUserInput) {
    try {
      const user = await this.userService.updateUser(updateParam);
      return { success: true, message: "OK", data: user };
    } catch (error) {
      if (error instanceof ValidationError) {
        return { success: false, message: "Params Validation Error", data: {} };
      } else {
        return { success: false, message: "Unknown Errors", data: {} };
      }
    }
  }

  @Post("/user/delete")
  async deleteUser(@Body() id: number) {
    const user = await this.userService.deleteUser(Number(id));
    return { success: true, message: "OK", data: user };
  }
}
