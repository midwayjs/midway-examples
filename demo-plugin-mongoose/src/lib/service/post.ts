import { provide, inject } from 'midway';
import {
  IPostService,
  IPostListOptions,
  IPostCreateOptions,
  IPostUpdates,
  IPostListResult,
  IPostResult,
} from '../../interface';
import { IMPostModel } from '../model/post';

@provide()
export class PostService implements IPostService {
  /* tslint:disable:variable-name */
  @inject()
  MPostModel: IMPostModel;

  async list(options: IPostListOptions): Promise<IPostListResult> {
    const limit = options.limit;
    const offset = options.offset;
    const result = await this.MPostModel.find({}).skip(offset).limit(limit || 20)
    const totalCount = await this.MPostModel.count({});
    return {
      postList: result,
      totalCount,
    };
  }

  async find(id: number): Promise<IPostResult[]> {
    return await this.MPostModel.find({
      id
    })
  }

  async create(options: IPostCreateOptions): Promise<number> {
    const post = await this.MPostModel.create(options)
    console.log(post);
    return post.id;
  }

  async update(id: number, updates: IPostUpdates): Promise<boolean> {
    const updateResult = await this.MPostModel.update(
      { id },
      { $set: { updates } }
    );
    // affected rows should greater than 0
    return updateResult['nModified'] > 0;
  }

  async softDelete(id: number): Promise<boolean> {
    const softDeleteResult = await this.MPostModel.update(
      { id },
      { $set: { status: 0 } }
    )
    // affected rows should greater than 0
    return softDeleteResult['nModified'] > 0;
  }

  async destroy(id: number): Promise<boolean> {
    const destroyResult = await this.MPostModel.deleteOne(
      { id },
    )
    // deleted rows should greater than 0
    return destroyResult['deletedCount'] > 0;
  }
}
