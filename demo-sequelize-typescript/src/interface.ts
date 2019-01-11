// returned post data structure
export interface IPostResult {
  id: number;
  title: string;
  postContent: string;
  createdTime: Date;
  modifiedTime: Date;
}

// post list service options
export interface IPostListOptions {
  limit: number;
  offset: number;
}

// post list service result
export interface IPostListResult {
  postList: IPostResult[];
  totalCount: number;
}

// post create service options
export interface IPostCreateOptions {
  title: string;
  postContent: string;
}

// post update service avaliable updates
export interface IPostUpdates {
  title: string;
  postContent: string;
}

export interface IPostService {
  list(options: IPostListOptions): Promise<IPostListResult>;
  find(id: number): Promise<IPostResult>;
  create(options: IPostCreateOptions): Promise<number>;
  update(id: number, updates: IPostUpdates): Promise<boolean>;
  softDelete(id: number): Promise<boolean>;
  destroy(id: number): Promise<boolean>;
}
