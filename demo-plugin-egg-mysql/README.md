# midway-demo-plugin-egg-mysql

## Steps

Step 1: install and config egg mysql plugin enable true.

```
// config/plugin.ts
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
```

Step 2: config egg-view default render engine use nunjucks.

```
// config/config.default.ts
config.mysql = {
  
};
```

Step 3: visit http://127.0.0.1:7001/
