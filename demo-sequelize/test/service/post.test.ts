import { app, assert } from 'midway-mock/bootstrap';
import { IPostService } from '../../src/interface';

xdescribe('test/service/post.test.ts', () => {
  it('#list', async () => {
    // prettier-ignore
    const post = await app.applicationContext.getAsync<IPostService>('postService');
    const data = await post.list({ limit: 10, offset: 0 });
    assert(data.length >= 0);
  });
});
