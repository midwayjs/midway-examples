
const { app, assert } = require('midway-mock/bootstrap');

describe('test/app/controller/home.test.ts', () => {

  it('should GET /api use router middleware', () => {
    return app.httpRequest()
      .get('/api')
      .expect('ba')
      .expect(200);
  });
});
