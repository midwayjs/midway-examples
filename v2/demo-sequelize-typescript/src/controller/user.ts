import {
  Inject,
  Controller,
  Get,
  Provide,
} from '@midwayjs/decorator';

import { Context } from 'egg';
import { User } from '../entities/user';
import { Post } from '../entities/post';

@Provide()
@Controller("/api")
export class APIController {
  @Inject()
  ctx: Context;

  @Get("/users")
  async invoke() {
    await User.create({
      name: 'zhangting_' + Date.now(),
      posts: []
    });
    const users = await User.findAll({include: [Post]});
    return { success: true, message: "OK", data: users };
  }
}
