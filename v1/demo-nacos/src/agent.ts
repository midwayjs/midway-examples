export = (agent) => {
  /**
   * 这里注释是因为demo中的地址，nacos版本非 1.0，naming service 无法跑通
   */
  agent.beforeStart(async () => {
    // 这里放在 agent 是因为 demo 中保证一次执行，只为了查看 naming 的结果
    // await agent.applicationContext.getAsync('namingService');
  });
}