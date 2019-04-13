export = (agent) => {
  agent.beforeStart(async () => {
    // 这里放在 agent 是因为 demo 中保证一次执行，只为了查看 naming 的结果
    await agent.applicationContext.getAsync('namingService');
  });
}