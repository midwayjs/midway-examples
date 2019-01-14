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
  list(options: IListQueryOptions): Promise<any>;
  find(id: number): Promise<any>;
  create(post: any): Promise<any>;
  update(id: number, updates: any): Promise<any>;
  destroy(id: number): Promise<any>;
}
