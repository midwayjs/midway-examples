import { Context } from 'midway'
import { JwtConfig } from '@waiting/egg-jwt'


export const development = {
  watchDirs: [
    'agent.ts',
    'app.ts',
    'interface.ts',
    'app',
    'config',
    'lib',
    'middleware',
    'service',
  ],
  overrideDefault: true,
}


export const jwt: JwtConfig = {
  agent: false,
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

// see: test/app/home/home.test.ts
async function testJumpTo(ctx: Context) {
  return ctx.method === 'GET' && ctx.path === '/test_passthrough_redirect'
    ? '/test_passthrough_redirect_path'
    : false
}
