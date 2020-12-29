# midway6-nacos-demo

the demo for use nacos client.

本示例演示了 nacos sdk 的 naming 和 config 能力。

**naming 能力**

启动时，agent 进程会去获取 naming 的数据，获取成功后会打印在控制台，这里使用了 midway 的单例特性。

**config 能力**

应用启动成功后，不断请求 `http://127.0.0.1:7001/`，会得到 `undefined`，`first data`, `another data` 的结果。

代码演示了 `subscribe`, `publisSingle` 的能力。