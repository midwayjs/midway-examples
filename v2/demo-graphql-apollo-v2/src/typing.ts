import type { UserRole } from './utils/constants';

export interface IContext {
  currentReqUser: {
    role: UserRole;
  };
}
