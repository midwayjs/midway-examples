/**
 * @description User-Service parameters
 */
export interface IListQueryOptions {
  title?: string;
  limit: number;
  offset: number;
}

/**
 * @description User-Service abstractions
 */
export interface IPostService {
  list(options: IListQueryOptions): Promise<{ count: number; rows: any[] }>;
  find(id: number): Promise<any>;
  create(post: any): Promise<any>;
  update(id: number, updates: any): Promise<any>;
  destroy(id: number): Promise<void>;
}
