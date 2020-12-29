import { controller, get, provide, Context, inject } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/api', { middleware: ['apiMiddleware']})
  async api(ctx: Context) {
    ctx.body = ctx.body + 'a';
  }

}
