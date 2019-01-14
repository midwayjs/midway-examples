module.exports = (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  config.acm = {
    endpoint: 'acm.aliyun.com', // Available in the ACM console
    namespace: '81597370-5076-4216-9df5-538a2b55bac3',
    accessKey: '4c796a4dcd0d4f5895d4ba83a296b489',
    secretKey: 'UjLemP8inirhjMg1NZyY0faOk1E=',
    requestTimeout: 6000,       // Request timeout, 6s by default
  };

  return config;
};
