import { app } from 'midway-mock/bootstrap';

describe('test/controller/home.test.ts', () => {

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect(/This is a midway-nunjucks example/)
      .expect(200);
  });
});
