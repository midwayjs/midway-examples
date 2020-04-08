# midway-demo-plugin-egg-mysql

## Steps

第一步：安装和启用 mysql 插件

```
// config/plugin.ts
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

第二步，配置 static 插件，示例里使用了默认值

```
// config/config.default.ts
config.mysql = {
  
};
```

第三步，访问 http://127.0.0.1:7001/
