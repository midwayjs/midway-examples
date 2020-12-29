import { WebMiddleware, provide, config } from 'midway';

@provide()
export class ApiMiddleware implements WebMiddleware {

  @config('hello')
  helloConfig;

  resolve() {
    return async (ctx, next) => {
      ctx.api = '222' + this.helloConfig.b;
      await next();
    };
  }

}