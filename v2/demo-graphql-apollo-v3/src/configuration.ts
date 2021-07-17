import { Configuration, App } from '@midwayjs/decorator';
import { ILifeCycle } from '@midwayjs/core';
import { IMidwayKoaApplication } from '@midwayjs/koa';
import * as cors from '@koa/cors';

import { getMockUser } from './utils/mock';
import { defaultPagination } from './utils/constants';

@Configuration({
  importConfigs: ['./config'],
})
export class ContainerConfiguration implements ILifeCycle {
  @App()
  app: IMidwayKoaApplication;

  async onReady() {
    this.app.use(
      cors({
        origin: '*',
        allowHeaders: '*',
        allowMethods: '*',
      })
    );
    this.app.use(await this.app.generateMiddleware('GraphQLMiddleware'));

    this.app.getApplicationContext().registerObject('mockUser', getMockUser());
    this.app
      .getApplicationContext()
      .registerObject('pagination', defaultPagination);
  }
}
