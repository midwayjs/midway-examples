# midway-test-demo

## 实现步骤

步骤 1: 按照 egg-view-nunjucks插件

```
$ npm i egg-view-nunjucks --save
```

步骤 2: 开启egg nunjucks plugin

```
// config/plugin.ts
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
```

步骤 3: 配置 egg-view 默认渲染引擎使用nunjucks

```
// config/config.default.ts
config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
};
```

步骤 4: 创建模板文件 src/app/view/home/index.nj

```
<h1>This is a {{ name }} example</h1>
```

步骤 5: 使用 ctx.render渲染nunjucks模板

```
// app/controller/home.ts

import { controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx) {
    await ctx.render('home/index.nj');
  }
}
```

## 快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [midway 文档][http://www.midwayjs.org/midway]。

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```

### 单元测试

- [midway-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [midway 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[midway]: https://midwayjs.org
