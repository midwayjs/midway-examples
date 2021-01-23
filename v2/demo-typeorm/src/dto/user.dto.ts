import { Rule, RuleType } from "@midwayjs/decorator";

export class CreateUserInput {
  @Rule(RuleType.string().required().min(2).max(10))
  name: string;
}

export class UpdateUserInput {
  @Rule(RuleType.number().required())
  id: number;

  @Rule(RuleType.string().required().min(2).max(10))
  name: string;
}

export class UserPaginationInput {
  @Rule(RuleType.number().optional().default(0).min(0))
  offset?: number;

  @Rule(RuleType.number().optional().default(100).min(1).max(200))
  take?: number;
}
