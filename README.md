# 说明
本仓库是Midway应用的demo例子。
V1: 对应midway 1.x版本的例子。
V2: 对应midway 2.x版本的例子。

# 使用说明
```
npm run bootstrap // 批量安装所有例子的node_modules，也可以单独进对应的例子进行npm install
cd v1/xxx && npm run dev // 运行例子
```

# midway examples list
midway 示例列表。

##  示例提交规则

- 使用 `midway-init` 命令，选择 `midway-demo` 这个类型创建脚手架，和现有目录不能重名，必须由 `demo-` 开头，如果是插件，可以用 `demo-plugin-` 打头
- 补充 README 内容，描述清楚这个示例是做什么用的，以及使用的过程
- 增加测试用例，方便回归

## demo 的包区别

demo 使用了精简版本的 midway，主要区别为：

- 使用 `midway-demo-lib` 包精简依赖
- 移除 tslint 等在 demo 中意义不大的部分
- 精简了 pkg，移除了没必要的部分


## 单包开发方式

虽然使用了 lerna 管理示例，但是不影响单个示例的开发，方法为：

- 进入示例目录，运行 npm i 安装依赖
- 运行 npm run dev，或者 npm run debug 进行开发
- 运行 npm run test 进行测试

## 项目整体

整个 examples 项目由 lerna 管理，自动把 `demo-` 打头的目录作为子目录进行管理，整体 bootstrap 时使用 `hoist` 模式进行安装依赖，减少体积。

一般来说，只会在运行测试时执行到这个，本地开发时，请直接进入对应的 demo 目录中进行安装依赖和开发操作。