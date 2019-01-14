module.exports = (appInfo: any) => {
  const config: any = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539671912752_2826';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'test',
    dialect: 'mysql',
  };

  // close csrf for unit test
  config.security = {
    csrf: false,
  };

  return config;
};
