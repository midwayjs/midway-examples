export = (appInfo: any) => {
  const config: any = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533201820393_3738';

  config.nacosNaming = {
    serverList: '106.14.43.196:8848',
  };

  config.nacosClient = {
    serverAddr: '106.14.43.196:8848',
    namespace: '',
  }

  return config;
};
