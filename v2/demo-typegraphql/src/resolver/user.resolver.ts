import { Provide } from "@midwayjs/decorator";
import { Resolver, Query } from "type-graphql";

import User from "../graphql/user";

@Provide()
@Resolver((of) => User)
export default class UserResolver {
  constructor() {}

  @Query((returns) => User)
  async GetRandomUser(): Promise<User> {
    return {
      id: Math.floor(Math.random() * 100),
      name: "abc123",
    };
  }
}
