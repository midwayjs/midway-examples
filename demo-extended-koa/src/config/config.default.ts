module.exports = (appInfo: any) => {
  const config: {
    keys?: string;
    middleware?
  } = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  // add your config here
  config.middleware = [
    'trace',
  ];

  return config;
};
