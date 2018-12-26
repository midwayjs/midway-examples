import { controller, get, post, provide, inject } from 'midway';
import { IPostService } from '../../interface';

@provide()
@controller('/post')
export class PostController {
  @inject()
  postService: IPostService;

  @get('/')
  async index(ctx) {
    const query = {
      limit: parseInt(ctx.query.limit, 10) || 10,
      offset: parseInt(ctx.query.offset, 10) || 0,
    };

    ctx.body = await this.postService.list(query);
  }

  @get('/find')
  async show(ctx) {
    ctx.body = await this.postService.find(parseInt(ctx.query.id, 10));
  }

  @post('/create')
  async create(ctx) {
    ctx.body = await this.postService.create(ctx.request.body);
  }

  @post('/update')
  async update(ctx) {
    const id = parseInt(ctx.request.body.id, 10);
    ctx.body = await this.postService.update(
      id,
      ctx.request.body.updates,
    );
  }

  @post('/delete')
  async delete(ctx) {
    const id = parseInt(ctx.request.body.id, 10);
    ctx.body = await this.postService.softDelete(id);
  }

  @post('/destroy')
  async destroy(ctx) {
    const id = parseInt(ctx.request.body.id, 10);
    ctx.body = await this.postService.destroy(id);
  }
}
