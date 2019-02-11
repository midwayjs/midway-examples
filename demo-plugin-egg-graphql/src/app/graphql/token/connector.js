'use strict';

class TokenConnector {
  constructor(ctx) {
    this.ctx = ctx;
    this.requestContext = this.ctx.requestContext;
  }

  async createToken() {
    return {
      success: true,
      message: 'ok',
    };
  }

  async updateToken() {
    return {
      success: true,
      message: 'ok',
    };
  }

  async deleteToken() {
    return {
      success: true,
      message: 'ok',
    };
  }

  async getTokenById() {
    // 获取 ioc 容器中的对象
    // 注意，这里必须实时拿取 userService 实例，每个请求周期的实例都不同
    const userService = await this.requestContext.getAsync('userService');
    const data = await userService.getUserList();
    return {
      success: true,
      message: 'get service data ' + JSON.stringify(data),
      data: { id: '1' },
    };
  }

  async getTokenList() {
    return {
      success: true,
      message: 'ok',
      data: [
        { id: '1' },
        { id: '2' },
      ],
    };
  }
}
module.exports = TokenConnector;