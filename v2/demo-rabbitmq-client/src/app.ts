
export = async (app) => {
  app.beforeStart(async () => {
    // 需要显式在 app 启动时用 getAsync() 的方式进行触发，否则该类只有在首次被业务逻辑调用的时候才能初始化
    await app.getApplicationContext().getAsync('rabbitmqService');
  });
};
