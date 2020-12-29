export default (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1583378283025_2275';

  // add your config here
  config.middleware = [
    'user'
  ];

  config.view = {
    mapping: {
      '.ejs': 'ejs',
    },
  };

  return config;
};
