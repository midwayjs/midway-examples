module.exports = (appInfo: any) => {
  const config: any = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539671912752_2826';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/scm',
    options: {},
    // mongoose global plugins, expected a function or an array of function and options
    plugins: [
    ],
  };

  // close csrf for unit test
  config.security = {
    csrf: false,
  };

  return config;
};
