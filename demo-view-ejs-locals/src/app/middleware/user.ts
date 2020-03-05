export = () => {
  return async (ctx, next) => {
    ctx.locals['engineName'] ='ejs';
    await next();
  }
}