import { app } from 'midway-mock/bootstrap';

describe('test/controller/home.test.ts', () => {

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/public/css/news.css')
      .expect(/body {}/)
      .expect(200);
  });
});
