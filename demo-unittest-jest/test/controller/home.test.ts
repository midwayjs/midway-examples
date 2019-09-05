import * as assert from 'assert';
import { mm } from 'midway-mock';

describe('test/controller/home.test.ts', () => {

  let app;

  beforeAll(() => {
    app = mm.app({
      typescript: true,
    });
    return app.ready();
  });

  it('should assert config.keys', () => {
    const pkg = require('../../package.json');
    assert(app.config.keys.startsWith(pkg.name));
  });

  it('should get untest test config', () => {
    assert(app.config.test.a === 1);
  });

  it('should GET /', () => {
    return app
      .httpRequest()
      .get('/')
      .expect('Welcome to midwayjs!')
      .expect(200);
  });
});
