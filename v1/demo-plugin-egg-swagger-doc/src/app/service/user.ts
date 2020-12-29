import { provide } from 'midway';

@provide()
export class UserService {

  async getUser() {
    return '123';
  }
}