import { Provide, Inject } from '@midwayjs/decorator';
import { Resolver, Query, Authorized, Arg, Int, Mutation } from 'type-graphql';

import User, {
  UserCreateInput,
  UserUpdateInput,
  UserPaginationInput,
} from '../graphql/user';
import { UserRole, IDefaultPagination } from '../utils/constants';

@Provide()
@Resolver(of => User)
export default class UserResolver {
  @Inject()
  mockUser: User[];

  @Inject()
  pagination: IDefaultPagination;

  @Authorized(UserRole.ADMIN)
  @Query(returns => [User])
  GetAllUsers(
    @Arg('pagination', type => UserPaginationInput, { nullable: true })
    pagination: UserPaginationInput
  ): User[] {
    const { offset, take } = pagination ?? this.pagination;
    return this.mockUser.slice(offset, offset + take);
  }

  @Query(returns => User, { nullable: true })
  GetUserById(@Arg('id', type => Int) id: number): User {
    return this.mockUser.find(value => value.id === id);
  }

  @Mutation(returns => User, { nullable: true })
  CreateUser(
    @Arg('createParams', type => UserCreateInput) createParams: UserCreateInput
  ) {
    const len = this.mockUser.length;
    const id = this.mockUser[len - 1].id + 1;
    const createdUser = {
      id,
      name: createParams.name,
    };
    this.mockUser.push(createdUser);

    return createdUser;
  }

  @Mutation(returns => User, { nullable: true })
  UpdateUser(
    @Arg('updateParams', type => UserUpdateInput) updateParams: UserUpdateInput
  ): User {
    const updateItem = this.mockUser.find(val => val.id === updateParams.id);
    updateItem.name = updateParams.name;

    return updateItem;
  }

  @Mutation(returns => User, { nullable: true })
  DeleteUser(@Arg('id', type => Int) id: number): User {
    const deleteItem = this.mockUser.find(val => val.id === id);
    const deleteIdx = this.mockUser.indexOf(deleteItem);

    this.mockUser.splice(deleteIdx, 1);
    return deleteItem;
  }
}
