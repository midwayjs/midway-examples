import { IPostInstance } from "./lib/model/post";

/**
 * @description User-Service parameters
 */
export interface IListQueryOptions {
  user_id?: number;
  limit: number;
  offset: number;
}

/**
 * @description User-Service abstractions
 */
export interface IPostService {
  list(options: IListQueryOptions): Promise<{count: number, rows: IPostInstance[]}>;
  find(id: number): Promise<IPostInstance>;
  create(post: any): Promise<IPostInstance>;
  update(id: number, updates: any): Promise<IPostInstance>;
  destroy(id: number): Promise<void>;
}
