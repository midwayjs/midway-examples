module.exports = (app) => {
  // or app.io.of('/')
  app.io.route('chat', app.io.controller.chat.ping);
};
