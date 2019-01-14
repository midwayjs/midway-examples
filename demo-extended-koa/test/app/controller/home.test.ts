/* tslint:disable */
const { app, assert } = require('midway-mock/bootstrap');
/* tslint:enable */

declare var describe;
declare var it;

describe('test/app/controller/home.test.ts', () => {

  it('should assert', function* () {
    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, midway')
      .expect(200);
  });
});
