# demo-react-ssr

this is a demo for how to use midway with react ssr.

## 目录结构

目录结构保持了midway的方式，以src下的app和config目录为主。将前端React相关代码放到web目录下，webpack打包相关文件位于build目录。整体来看，目录不多，层级不深，属于刚刚好那种。

```
├── README.md
├── src
│   ├── app // midway核心目录
│   ├── controller
│   ├── extend
│   ├── app.ts // midway启动入口文件
│   ├── middleware
│   ├── config // midway配置文件目录
│   │   ├── config.default.ts
│   │   ├── config.local.ts
│   │   ├── config.prod.ts
│   │   ├── config.staging.ts
│   │   ├── plugin.ts
│   │   └── plugin.local.ts
│   └── router.ts // 原egg路由文件，用于在控制器上自动绑定前端路由，无特殊需求不需要修改内容
├── build // webpack配置目录
│   ├── env.js
│   ├── jest
│   ├── paths.js
│   ├── util.js
│   ├── webpack.config.base.js // 通用的webpack配置
│   ├── webpack.config.client.js // webpack客户端打包配置
│   └── webpack.config.server.js // webpack服务端打包配置
├── config // 服务端渲染配置文件目录
│   └── config.ssr.js // 服务端渲染配置文件
├── dist // midway打包文件目录
├── output // build生成静态资源文件目录
│   ├── Page.server.js // 服务端打包后文件(即打包后的serverRender方法)
│   └── static // 前端打包后静态资源目录
└── web // 前端文件目录
    ├── assets
    │   └── common.less
    ├── entry.tsx // webpack打包入口文件，分环境导出不同配置
    ├── layout
    │   ├── index.tsx // 页面布局
    │   └── index.less
    └── page
        ├── index
        └── news
```

## npm scripts

1）启动服务端渲染

启动监听7001端口，只启动服务端渲染，此时仅服务端直出html，没有与客户端混合的步骤

```
$ npm run ssr 
```

2）启动客户端渲染

启动监听8000端口，只启动客户端渲染，相当于传统的cra脚手架开发模式

```
$ npm run csr 
```

3）同时启动csr和ssr方式。

```
$ npm start // 启动监听7001端口，建议使用方式，同时启动服务端渲染 + 客户端hydrate
```

4）配套的脚本

```
$ npm start // 启动开发环境
$ npm run prod // 模拟SSR应用生产环境
$ npm run build // 打包服务端以及客户端资源文件
$ npm run analyze // 可视化分析客户端打包的资源详情
$ npm run ssr // 开启服务端渲染
$ npm run csr // 开启客户端渲染

```
