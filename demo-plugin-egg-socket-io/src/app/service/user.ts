import { provide } from 'midway';
import { IUserAbstract, IUserOptions } from '../../lib/interfaces/user.abstract';

@provide('userService')
export class UserService implements IUserAbstract {

  async getUser(options: IUserOptions): Promise<number> {
    return 123;
  }
}
