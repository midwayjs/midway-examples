# midway-demo-plugin-egg-static

## Steps

第一步：启用 static 插件

```
// config/plugin.ts
exports.static = true;
```

第二步，配置 static 插件，示例里使用了默认值

```
// config/config.default.ts
config.static = {
  
};
```

第三步，访问 http://127.0.0.1:7001/public/css/news.css
