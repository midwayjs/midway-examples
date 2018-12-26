import { provide, inject } from 'midway';
import {
  IPostService,
  IPostListOptions,
  IPostCreateOptions,
  IPostUpdates,
  IPostListResult,
  IPostResult,
} from '../../interface';
import { IPostModel } from '../model/post';

@provide()
export class PostService implements IPostService {
  /* tslint:disable:variable-name */
  @inject()
  PostModel: IPostModel;

  async list(options: IPostListOptions): Promise<IPostListResult> {
    const result = await this.PostModel
    .scope('avaliable')
    .findAndCountAll({
      limit: options.limit,
      offset: options.offset,
    });

    return {
      postList: result.rows,
      totalCount: result.count,
    };
  }

  async find(id: number): Promise<IPostResult> {
    return this.PostModel
    .scope('avaliable')
    .findByPrimary(id, {
      attributes: ['id', 'title', 'postContent', 'createdTime', 'modifiedTime'],
    });
  }

  async create(options: IPostCreateOptions): Promise<number> {
    const post = await this.PostModel.create(options);

    return post.id;
  }

  async update(id: number, updates: IPostUpdates): Promise<boolean> {
    const updateResult = await this.PostModel
    .scope('avaliable')
    .update(
      updates,
      { where: { id } },
    );

    // affected rows should greater than 0
    return updateResult[0] > 0;
  }

  async softDelete(id: number): Promise<boolean> {
    const softDeleteResult = await this.PostModel
    .scope('avaliable')
    .update(
      { status: 0 },
      { where: { id } },
    );

    // affected rows should greater than 0
    return softDeleteResult[0] > 0;
  }

  async destroy(id: number): Promise<boolean> {
    const destroyResult = await this.PostModel
    .destroy(
      { where: { id } },
    );

    // deleted rows should greater than 0
    return destroyResult > 0;
  }
}
