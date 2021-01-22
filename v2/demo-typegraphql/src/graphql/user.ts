import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field((type) => ID)
  id!: number;

  @Field()
  name!: string;
}
