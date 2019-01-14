# 示例提交规则

- 使用 `midway-init` 命令创建脚手架，和现有目录不能重名，必须由 `demo-` 开头，如果是插件，可以用 `demo-plugin-` 打头
- 补充 README 内容，描述清楚这个示例是做什么用的
- 增加测试用例，方便回归

> demo 的脚手架暂无，后面将会单独分离

demo 使用了精简版本的 midway，主要区别为：

- 使用 `midway-demo-lib` 包精简依赖
- 移除 tslint 等在 demo 中意义不大的部分
- 精简了 pkg，移除了没必要的部分

虽然使用了 lerna 管理示例，但是不影响单个示例的开发，方法为：

- 进入示例目录，运行 npm i 安装依赖
- 运行 npm run dev，或者 npm run debug 进行开发
- 运行 npm run test 进行测试