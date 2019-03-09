// this is a web middleware just for some router

import { WebMiddleware, provide, config } from 'midway';

@provide()
export class ApiMiddleware implements WebMiddleware {

  @config('hello')
  helloConfig;

  resolve() {
    return async (ctx, next) => {
      ctx.body = 'b';
      await next();
    };
  }

}
