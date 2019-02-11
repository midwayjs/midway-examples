import { provide } from 'midway';

@provide('userService')
export class UserService {

  async getUserList() {
    return [
      { id: '1', name: 'user1' },
      { id: '2', name: 'user2' },
    ];
  }
}
