import * as assert from 'assert';
import { mm } from 'midway-mock';

describe('test/service/user.test.ts', () => {

  let app;

  beforeAll(() => {
    app = mm.app({
      typescript: true,
    });
    return app.ready()
  });

  it('#getUser', async () => {
    const user = await app.applicationContext.getAsync('userService');
    const data = await user.getUser({ id: 1 });
    assert(data.id === 1);
    assert(data.username === 'mockedName');
  });
});
