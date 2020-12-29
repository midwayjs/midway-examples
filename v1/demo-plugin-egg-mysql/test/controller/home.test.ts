import { app } from 'midway-mock/bootstrap';

describe('test/controller/home.test.ts', () => {

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect(/midway_test/)
      .expect(200);
  });
});
