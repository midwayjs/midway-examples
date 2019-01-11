import { controller, get, provide, inject } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  acmService;

  @get('/')
  async index(ctx: any) {
    ctx.body = this.acmService.getData();
  }

}
