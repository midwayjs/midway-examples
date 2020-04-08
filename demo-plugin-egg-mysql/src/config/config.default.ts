module.exports = (appInfo: any) => {
  const config: any = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539671912752_2826';

  // add your config here
  config.middleware = [
  ];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'remotemysql.com',
      // port
      port: '3306',
      // username
      user: 'x4bPjComok',
      // password
      password: 'DIlL2FiiWP',
      // database
      database: 'x4bPjComok',    
    },
    // load into app, default is open
    app: true,
  }

  return config;
};
