import { controller, get, provide, inject, plugin } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @plugin()
  mysql;

  @inject()
  ctx;

  @get('/')
  async index() {
    const data = await this.mysql.query('select * from npm_auth', []); 
    this.ctx.body = data;
  }
}
