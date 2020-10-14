import * as assert from 'power-assert'
import { basename, join } from '@waiting/shared-core'
import { app } from 'midway-mock/bootstrap'
import { JwtMsg, schemePrefix } from '@waiting/egg-jwt'


const filename = basename(__filename)

const expectPayloadStr = '{"foo":"bar","iat":1566629919}'
const signature1 = 'PZkACzct30IcrymoodYlW0LW0Fc1r6Hs1l8yOZSeNpk'
const header1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
const token1 = header1
  + 'eyJmb28iOiJiYXIiLCJpYXQiOjE1NjY2Mjk5MTl9.'
  + signature1

describe(filename, () => {

  it('should assert', async () => {
    // eslint-disable-next-line
    const pkg = require('../../../package.json')
    assert(app.config.keys.startsWith(pkg.name))
    const ctx = app.mockContext({})
    // await ctx.service.xx();
  })


  // src/config/config.default.ts
  describe('Not in ignore config:', () => {
    it('should error w/o token', async () => {
      const ret = await app.httpRequest()
        .get('/token')
        .expect(401)

      const msg: string = ret.text
      assert(msg && msg.includes(JwtMsg.AuthFailed))
    })

    it('should works with invalid header format', async () => {
      const ret = await app.httpRequest()
        .get('/token')
        .set('authorization', `${schemePrefix} ${token1}FAKE`)
        .expect(401)

      const msg: string = ret.text
      assert(msg && msg.includes(JwtMsg.AuthFailed))
    })

    it('should works with header format', async () => {
      const ret = await app.httpRequest()
        .get('/token')
        .set('authorization', `${schemePrefix} FAKE`)
        .expect(401)

      const msg: string = ret.text
      assert(msg && msg.includes(JwtMsg.AuthFailed))
    })

    it('should works with invalid header auth', async () => {
      const ret = await app.httpRequest()
        .get('/token')
        .set('authorization', `${schemePrefix} ${token1.toLowerCase()}`)
        .expect(401)

      const msg: string = ret.text
      assert(msg && msg.includes(JwtMsg.AuthFailed))
    })

    it('should works with header auth', async () => {
      const ret = await app.httpRequest()
        .get('/token')
        .set('authorization', `${schemePrefix} ${token1}`)
        .expect(200)

      const msg: string = ret.text
      assert(msg && msg.includes(expectPayloadStr))
    })

    it('should works with cookies auth', async () => {
      app.mockCookies({
        access_token: token1,
      })
      const ret = await app.httpRequest()
        .get('/token')
        .expect(200)

      const msg: string = ret.text
      assert(msg && msg.includes(expectPayloadStr))
    })

    it('should redirect w/o token', async () => {
      // config at src/config/config.local.ts
      const url = '/test_passthrough_redirect'
      const ret = await app.httpRequest()
        .get(url)
        .expect(302)

      const msg: string = ret.text
      assert(msg && msg.includes('Redirecting'))
      assert(msg.includes(`${url}_path`))
    })
  })

  // src/config/config.default.ts
  describe('In ignore config:', () => {
    it('should GET /', async () => {
      const ret = await app.httpRequest()
        .get('/')
        .expect(200)

      const msg: string = ret.text
      assert(msg && msg.includes('Hello midwayjs!'))
    })

    it('should GET /hello', async () => {
      const ret = await app.httpRequest()
        .get('/hello')
        .expect(200)

      const msg: string = ret.text
      assert(msg && msg.includes('Hello midwayjs!'))
    })

    it('should GET /test_sign', async () => {
      const ret = await app.httpRequest()
        .get('/test_sign')
        .expect(200)

      const msg: string = ret.text
      assert(msg && msg.includes('{"foo":"bar",'))
      assert(msg.includes(header1))
    })
  })

})
