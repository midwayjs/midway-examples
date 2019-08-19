import { controller, config, plugin, get, provide, Context, inject } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @plugin()
  jwt;

  @config('jwt')
  jwtConfig;

  @get('/token')
  async api(ctx: Context) {
    const token = this.jwt.sign({ foo: 'bar' }, this.jwtConfig.secret);
    ctx.body = token;
  }

}
