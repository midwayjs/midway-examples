import { AuthChecker } from 'type-graphql';
import { IContext } from '../typing';
import { UserRole } from './constants';

export const authChecker: AuthChecker<IContext> = (
  {
    root,
    args,
    context: {
      currentReqUser: { role },
    },
    info,
  },
  requiredAuth
): boolean => {
  // requiredAuth 会是 [2] (转化后的枚举值)这种形式
  const requiredAuthRole = Number(requiredAuth[0]);
  console.log('Required Auth Role: ' + requiredAuthRole);
  console.log('User Auth Role: ' + role);
  return role >= requiredAuthRole;
};
