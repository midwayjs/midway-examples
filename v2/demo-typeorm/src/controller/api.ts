import { Inject, Controller, Get, Provide } from "@midwayjs/decorator";
import { Context } from "egg";

import { UserService } from "../service/user";

@Provide()
@Controller("/api")
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get("/users")
  async getUser() {
    const user = await this.userService.getUser();
    return { success: true, message: "OK", data: user };
  }

  @Get("/create")
  async createUser() {
    const user = await this.userService.createUser();
    return { success: true, message: "OK", data: user };
  }
}
