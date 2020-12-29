import { Inject, Controller, Post, Provide, Query, Body } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';
import { UserVO } from '../VO/user.vo';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/get_user')
  async getUser(@Query() uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/user_info', {summary: 'Main Page', description: 'This is a home router'})
  async home(@Body() user: UserVO) {
    console.log(`user: ${JSON.stringify(user)}`)
    return 'Hello Midwayjs!';
  }
}
