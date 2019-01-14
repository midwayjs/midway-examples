# 示例提交规则

- 使用 `midway-init` 命令创建脚手架，和现有目录不能重名，必须由 demo- 开头
- 补充 README 内容，描述清楚这个示例是做什么用的
- 增加测试用例，方便回归


由于使用了 lerna 管理示例，开发方法为：

- 运行 npm i 安装 lerna 依赖和 typescript 相关依赖
- 运行 npm run bootstrap 安装示例依赖，所有仓库的依赖都会聚合
- 进入示例目录执行 npm run dev/debug 进行开发

Tips: 根目录 package.json 的依赖无需在示例包中重复依赖，尽量减少依赖量，只保留不同的部分