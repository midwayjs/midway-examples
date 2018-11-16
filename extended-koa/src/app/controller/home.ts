import { controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx: any) {
    ctx.body = ctx.getName();
  }

}
