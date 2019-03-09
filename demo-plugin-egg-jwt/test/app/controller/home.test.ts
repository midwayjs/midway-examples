
const { app, assert } = require('midway-mock/bootstrap');

describe('test/app/controller/home.test.ts', () => {

  it('should GET /api use router middleware', () => {
    return app.httpRequest()
      .get('/token')
      .expect(200)
      .expect((res) => {
        console.log(res.text);
        assert(res.text.length > 20)
      });
  });
});
