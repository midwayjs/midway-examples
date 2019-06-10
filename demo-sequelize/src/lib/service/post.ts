import { provide, inject } from 'midway';
import { IPostService, IListQueryOptions } from '../../interface';
import { IPostModel } from '../model/post';

interface IListQueryOpt {
  offset: number;
  limit: number;
  attributes: string[];
  order: string[][];
  where?: {
    user_id: number,
  };
}

@provide('postService')
export class PostService implements IPostService {
  @inject('postModel')
  model: IPostModel;

  async list({ offset = 0, limit = 10, user_id }: IListQueryOptions) {
    const options: IListQueryOpt = {
      offset,
      limit,
      attributes: ['id', 'title', 'user_id', 'created_at', 'updated_at'],
      order: [['created_at', 'desc'], ['id', 'desc']],
    };
    if (user_id) {
      options.where = {
        user_id,
      };
    }
    return this.model.findAndCountAll(options);
  }

  async find(id: number) {
    const post = await this.model.findById(id);
    if (!post) {
      throw new Error('post not found');
    }
    return post;
  }

  async create(post) {
    return this.model.create(post);
  }

  async update(id, updates) {
    const post = await this.find(id);
    return post.update(updates);
  }

  async destroy(id) {
    const post = await this.find(id);
    return post.destroy();
  }
}
