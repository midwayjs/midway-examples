import { controller, get, provide, Context } from 'midway';
const { getDir } = require('demo-monorepo-util');

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx: Context) {
    ctx.body = getDir();
  }

}
