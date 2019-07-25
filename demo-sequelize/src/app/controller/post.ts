/**
 * midway sequelize 使用范例
 * 参考
 * - https://github.com/midwayjs/midway-examples/tree/master/demo-sequelize
 * - http://docs.sequelizejs.com/manual/typescript.html
 */
import { Context, controller, del, get, inject, patch, post, provide } from 'midway';
import { IPostService } from '../../lib/service/post.i';

@provide()
@controller('/post/')
export class PostController {
  @inject('postService')
  public service: IPostService;

  /**
   * GET /post
   */
  @get('/')
  public async index(ctx: Context) {
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
  public async show(ctx: Context) {
    ctx.body = await this.service.find(parseInt(ctx.params.id, 10));
  }

  /**
   * POST /post/
   */
  @post('/')
  public async create(ctx: Context) {
    const res = await this.service.create(ctx.request.body);
    // tslint:disable-next-line: no-magic-numbers
    ctx.status = 201;
    ctx.body = res;
  }

  /**
   * PATCH /post/:id
   */
  @patch('/:id')
  public async update(ctx: Context) {
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
  public async destroy(ctx: Context) {
    const id = parseInt(ctx.params.id, 10);
    await this.service.destroy(id);
    // tslint:disable-next-line: no-magic-numbers
    ctx.status = 200;
  }
}
