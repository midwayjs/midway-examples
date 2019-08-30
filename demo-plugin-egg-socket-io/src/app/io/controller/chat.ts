module.exports = (app) => {
  class Controller extends app.Controller {
    async ping() {
      const message = this.ctx.args[0];
      const userService = await this.ctx.requestContext.getAsync('userService');
      const result = await userService.getUser();
      await this.ctx.socket.emit('res', `Hi! I've got your message: ${message}${result}`);
    }
  }
  return Controller;
};
