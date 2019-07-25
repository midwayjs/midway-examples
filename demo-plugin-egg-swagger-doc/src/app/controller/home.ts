import { controller, get, provide, Context, inject } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async home() {
    this.ctx.body = 'hello swagger';
  }

}
