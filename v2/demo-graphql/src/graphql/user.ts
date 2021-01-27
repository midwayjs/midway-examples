import { Field, ID, ObjectType, InputType, Int } from 'type-graphql';

import {
  IsNumber,
  IsPositive,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';

@ObjectType()
export default class User {
  @Field(type => ID)
  id!: number;

  @Field()
  name!: string;
}

@InputType()
export class UserCreateInput {
  @Field()
  @IsString()
  @Length(2, 10)
  name!: string;
}

@InputType()
export class UserUpdateInput {
  @IsNumber()
  @IsPositive()
  @Field(type => Int)
  id!: number;

  @Field()
  @IsString()
  @Length(2, 10)
  name!: string;
}

@InputType()
export class UserPaginationInput {
  @IsNumber()
  @Min(0)
  @Field(type => Int)
  offset?: number;

  @IsNumber()
  @Min(5)
  @Max(100)
  @Field(type => Int)
  take?: number;
}
