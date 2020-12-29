# midway-demo-plugin-egg-static

## Steps

Step 1: config egg static plugin enable true.

```
// config/plugin.ts
exports.static = true;
```

Step 2: config egg-view default render engine use nunjucks.

```
// config/config.default.ts
config.static = {
  
};
```

Step 3: visit http://127.0.0.1:7001/public/css/news.css
