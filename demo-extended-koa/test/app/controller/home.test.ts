
const { app, assert } = require('midway-mock/bootstrap');

describe('test/app/controller/home.test.ts', () => {

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('harry welcome')
      .expect(200);
  });

  it('should GET /api use router middleware', () => {
    return app.httpRequest()
      .get('/api')
      .expect('222111')
      .expect(200);
  });
});
