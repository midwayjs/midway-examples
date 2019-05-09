import { provide, init, config, scope, ScopeEnum, logger } from 'midway';

const NacosNamingClient = require('nacos').NacosNamingClient;

@provide()
@scope(ScopeEnum.Singleton)
export class NamingService {

  nacosClient;

  @config('nacosNaming')
  nacosConfig;

  @logger()
  logger;

  @init()
  async init() {
    this.nacosClient = new NacosNamingClient({
      ...this.nacosConfig,
      logger: this.logger,
      namespace: 'public',
    });
    await this.nacosClient.ready();

    // 这里的服务名请从 nacos 服务上找
    this.nacosClient.subscribe('nacos.test.3', hosts => {
      console.log('-----------naming result start --------------');
      console.log(hosts);
      console.log('-----------naming result end--------------');
    });
  }

}