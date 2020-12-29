import { inject, provide } from 'midway';
import { IPostModel } from '../model/post';
import { IListQueryOpt, IListQueryOptions, IPostService } from './post.i';

@provide('postService')
export class PostService implements IPostService {
  @inject('PostModel')
  public model: IPostModel;

  public async list({ offset = 0, limit = 10, title }: IListQueryOptions) {
    const options: IListQueryOpt = {
      offset,
      limit,
      attributes: ['id', 'title', 'content', 'created_at', 'updated_at'],
      order: [['updated_at', 'desc'], ['id', 'desc']],
    };
    if (title) {
      options.where = {
        title,
      };
    }
    return this.model.findAndCountAll(options);
  }

  public async find(id) {
    const post = await this.model.findByPk(id);
    if (!post) {
      throw new Error('post not found');
    }
    return post;
  }

  public async create(post) {
    return this.model.create(post);
  }

  public async update(id, updates) {
    const post = await this.find(id);
    return post.update(updates);
  }

  public async destroy(id) {
    const post = await this.find(id);
    return post.destroy();
  }
}
