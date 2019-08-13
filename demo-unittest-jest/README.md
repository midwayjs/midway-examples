# midway-demo-unittest-jest

使用 jest 进行单测

## 使用

`npm run test`

调整了测试框架为 jest，修改了 test/cov 命令。


## @types/mocha 和 @types/jest 冲突问题

不要在依赖里安装两个不同的定义，或者相关的模块。

> 本示例由于在 lerna 仓库，无法去除根路径下的 @types/mocha，只能修改 tsconfig.json

**修改方法**

```json
  "compilerOptions": {
    "types": ["jest"]
  },
```

或者

```json
  "compilerOptions": {
    "skipLibCheck": true
  }
```