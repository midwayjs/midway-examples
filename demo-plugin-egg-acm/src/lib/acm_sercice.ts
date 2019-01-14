import { scope, ScopeEnum, provide, init, plugin } from 'midway';

const dataId = 'acm.test.1';
const group = 'DEFAULT_GROUP';

@provide()
@scope(ScopeEnum.Singleton)
export class ACMService {

  acmText;

  @plugin()
  acm;

  @init()
  async init() {
    // 放在这里是因为设置成了单例，全局只会有一份实例
    const str = `example_test_${Math.random()}_${Date.now()}`;
    await this.acm.publishSingle(dataId, group, str);

    this.acm.subscribe({
      dataId,
      group
    }, (data) => {
      console.log('get data from acm', data);
      this.acmText = data;
    });
    
    this.acmText = await this.acm.getConfig(dataId, group);
  }

  getData() {
    return this.acmText;
  }
}
