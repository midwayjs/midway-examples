import { controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx) {
    await ctx.render('home/index.nj', { name: 'midway-nunjucks' });
  }
}
