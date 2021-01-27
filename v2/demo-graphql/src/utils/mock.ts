import User from '../graphql/user';

export const getMockUser = () => {
  let users: User[] = [];

  for (let i = 0; i < 20; i++) {
    users.push({
      id: i + 1,
      name: `User-${i + 1}`,
    });
  }
  return users;
};
