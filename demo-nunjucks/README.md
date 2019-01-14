# midway-nunjucks-demo

## Steps

Step 1: install egg-view-nunjucks plugin for egg-view render.

```
$ npm i egg-view-nunjucks --save
```

Step 2: config egg nunjucks plugin enable true.

```
// config/plugin.ts
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};
```

Step 3: config egg-view default render engine use nunjucks.

```
// config/config.default.ts
config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
};
```

Step 4: touch src/app/view/home/index.nj

```
<h1>This is a {{ name }} example</h1>
```

Step 5: use ctx.render method to render a nunjucks template.

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

## QuickStart

<!-- add docs here for user -->

see [midway docs][http://www.midwayjs.org/midway/] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[midway]: https://midwayjs.org
