# 说明
本仓库是Midway应用的demo例子。
V1: 对应midway 1.x版本的例子。
V2: 对应midway 2.x版本的例子。

# 使用说明
```
npm run bootstrap // 批量安装所有例子的node_modules，也可以单独进对应的例子进行npm install
cd v1/xxx && npm run dev // 运行例子
```

## 项目整体

整个 examples 项目由 lerna 管理，整体 bootstrap 时使用 `hoist` 模式进行安装依赖，减少体积。

一般来说，只会在运行测试时执行到这个，本地开发时，请直接进入对应的 demo 目录中进行安装依赖和开发操作。
