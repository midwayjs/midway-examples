import { schedule } from 'midway';

@schedule({
  type: 'all',
  interval: 1000,
})
export default class TestCron {
  async exec(ctx) {
    ctx.logger.info('hello world');
  }
}
