import { EggAppInfo, Context } from 'midway'

import { DefaultConfig } from './config.modal'


export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig

  // use for cookie sign key, should change to your own and keep security
  config.keys = `${appInfo.name}_1559532739676_8888`

  // switch by plugin.ts:cors.enable
  config.cors = {
    origin: '*',
    allowMethods: 'DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT',
    maxAge: 600,
  }

  config.welcomeMsg = 'Hello midwayjs!'

  config.jwt = {
    enable: true, // enable middleware
    client: {
      authOpts: {
        cookie: 'access_token',
        key: 'user',
        passthrough: testJumpTo,
      },
      secret: '123456abc',
    },
    ignore: [/^\/$/u, '/login', '/hello', '/test_sign'],
  }

  return config
}

async function testJumpTo(ctx: Context) {
  return ctx.method === 'GET' && ctx.path === '/test_passthrough_redirect'
    ? '/test_passthrough_redirect_path'
    : false
}
