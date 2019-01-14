import { controller, get, post, patch, del, provide, inject } from 'midway';
import { IPostService } from '../../interface';

@provide()
@controller('/post/')
export class HomeController {
  @inject('postService')
  service: IPostService;

  /**
   * GET /post
   */
  @get('/')
  async index(ctx) {
    const query = {
      limit: parseInt(ctx.query.limit, 10) || 10,
      offset: parseInt(ctx.query.offset, 10) || 0,
    };
    ctx.body = await this.service.list(query);
  }

  /**
   * GET /post/:id
   */
  @get('/:id')
  async show(ctx) {
    ctx.body = await this.service.find(parseInt(ctx.params.id, 10));
  }

  /**
   * POST /post/
   */
  @post('/')
  async create(ctx) {
    const res = await this.service.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = res;
  }

  /**
   * PATCH /post/:id
   */
  @patch('/:id')
  async update(ctx) {
    const id = ctx.params.id;
    const updates = {
      title: ctx.request.body.title,
      content: ctx.request.body.content,
    };
    ctx.body = await this.service.update(id, updates);
  }

  /**
   * DEL /post/:id
   */
  @del('/id')
  async destroy(ctx) {
    const id = parseInt(ctx.params.id, 10);
    await this.service.destroy(id);
    ctx.status = 200;
  }
}
