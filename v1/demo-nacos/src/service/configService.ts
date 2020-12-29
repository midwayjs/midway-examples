import { provide, init, config, scope, ScopeEnum } from 'midway';
import { NacosConfigClient } from 'nacos';

const dataId = 'nacos.test.1';
const group = 'DEFAULT_GROUP';

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// 这里单例即可
@provide()
@scope(ScopeEnum.Singleton)
export class ConfigService {

  nacosClient;

  @config('nacosClient')
  nacosConfig;

  nacosData;

  @init()
  async init() {
    this.nacosClient = new NacosConfigClient(this.nacosConfig);
    await this.nacosClient.ready();

    // 先发布一次保证有值
    await this.nacosClient.publishSingle(dataId, group, 'first data');

    // 为了启动就拿到数据，也可以先主动调用一次 getConfig
    // this.nacosData = await this.nacosClient.getConfig(dataId, group);

    this.nacosClient.subscribe({
      dataId,
      group,
    }, (content) => {
      this.nacosData = content;
    });

    // 这里尝试在第一次被调用，5s 后更新服务端数据
    // 这里没有用 await，避免启动卡住
    this.updateData();
  }

  getData() {
    return this.nacosData;
  }

  async updateData() {
    // 5s 之后再执行
    await sleep(5000);
    await this.nacosClient.publishSingle(dataId, group, 'another data');
    console.log('---------------------------------------');
    console.log('nacos data has changed by client update');
    console.log('---------------------------------------');
  }
}