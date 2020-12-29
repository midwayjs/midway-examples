import { Context, controller, inject, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    await this.ctx.render('home.ejs', { name: 'midway' });
  }
}
