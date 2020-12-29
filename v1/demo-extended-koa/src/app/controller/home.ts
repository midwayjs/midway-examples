import { controller, get, provide, Context } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx: Context) {
    ctx.body = ctx.getName() + ' ' + ctx.name;
  }

  @get('/api', {middleware: ['apiMiddleware']})
  async api(ctx: Context) {
    ctx.body = ctx.api;
  }

}
