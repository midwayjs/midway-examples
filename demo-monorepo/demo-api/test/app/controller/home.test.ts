
const path = require('path');
const { app, assert } = require('midway-mock/bootstrap');

describe('test/app/controller/home.test.ts', () => {

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(/demo-util/)
      .expect(200);
  });

});
