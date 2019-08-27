import {
  Context, config, controller, get, provide, plugin,
} from 'midway'
import { Jwt } from '@waiting/egg-jwt'


@provide()
@controller('/')
export class HomeController {

  constructor(
    @config() private readonly welcomeMsg: string,
    @plugin() private readonly jwt: Jwt,
  ) { }

  @get('/', { middleware: ['apiMiddleware'] })
  public index(ctx: Context): void {
    ctx.body = `${this.welcomeMsg} - ${ctx.api.reqTimeStr}`
  }

  @get('/hello', { middleware: ['apiMiddleware'] })
  public hello(ctx: Context): void {
    ctx.body = `${this.welcomeMsg} - ${ctx.api.reqTimeStr}`
  }

  @get('/token')
  public token(ctx: Context) {
    const payload = ctx.state && ctx.state.user ? JSON.stringify(ctx.state.user) : 'Not found'
    ctx.body = `\nRequest: ${payload}`
  }

  @get('/test_sign')
  public sign(ctx: Context) {
    const payload = { foo: 'bar' }
    const token = this.jwt.sign(payload)
    const valid = this.jwt.verify(token)

    ctx.body = `\nPayload: ${JSON.stringify(payload)}\nToken: ${token}\nResult: ${JSON.stringify(valid)}`
  }

}
