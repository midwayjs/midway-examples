import { Rule, RuleType } from "@midwayjs/decorator";

export class CreateUserInput {
  @Rule(RuleType.string().email().required().min(2).max(30))
  email: string;

  @Rule(RuleType.string().optional().min(2).max(10))
  name?: string;
}

// Assert email as constant
export class UpdateUserInput {
  @Rule(RuleType.number().required())
  id: number;

  @Rule(RuleType.string().optional().min(2).max(10))
  name?: string;
}

export class UserPaginationInput {
  @Rule(RuleType.number().optional().default(0).min(0))
  offset?: number;

  @Rule(RuleType.number().optional().default(100).min(1).max(200))
  take?: number;
}
