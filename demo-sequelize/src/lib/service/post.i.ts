import { Order } from 'sequelize';
import { IPostModelResult } from '../model/post';

export interface IListQueryOpt {
  offset: number;
  limit: number;
  attributes: string[];
  order: Order;
  where?: {
    title: string;
  };
}

/**
 * @description Post-Service parameters
 */
export interface IListQueryOptions {
  title?: string;
  limit: number;
  offset: number;
}

/**
 * @description Post-Service abstractions
 */
export interface IPostService {
  list(
    options: IListQueryOptions,
  ): Promise<{ count: number; rows: IPostModelResult[] }>;
  find(id: number): Promise<IPostModelResult>;
  create(post: IPostModelResult): Promise<IPostModelResult>;
  update(
    id: number,
    updates: Partial<IPostModelResult>,
  ): Promise<IPostModelResult>;
  destroy(id: number): Promise<void>;
}
