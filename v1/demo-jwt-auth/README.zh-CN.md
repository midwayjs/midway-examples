# midway-demo-jwt-auth

[egg-jwt] 以插件和中间件方式提供 JWT 签名，校验以及认证功能


### 本地开发

```sh
npm i
npm run dev
```
 
打开以下地址然后刷新：
- http://localhost:7001/
- http://localhost:7001/test_sign
- http://localhost:7001/token


### 部署

```bash
npm run clean && npm run build
npm start
npm stop
```


### 测试

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm run test` 来执行单元测试。


## 文档

- [Midway]
- [egg-jwt]


[Midway]: https://midwayjs.org/midway
[egg-jwt]: https://github.com/waitingsong/egg-jwt
