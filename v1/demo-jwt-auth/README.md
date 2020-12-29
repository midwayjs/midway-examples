# midway-demo-jwt-auth

JWT signing, verifying, and authentication by [egg-jwt] as plugin and middleware.


### Development

```sh
npm i
npm run dev
```

Open url and refreseh page:
- http://localhost:7001/
- http://localhost:7001/test_sign
- http://localhost:7001/token


### Deploy

```bash
npm run clean && npm run build
npm start
npm stop
```


### Test

- Use `npm run lint` to check code style.
- Use `npm run test` to run unit test.


## Document

- [Midway]
- [egg-jwt]


[Midway]: https://midwayjs.org/midway
[egg-jwt]: https://github.com/waitingsong/egg-jwt
