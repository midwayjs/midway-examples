import * as path from 'path';
import { Provide, Config, App } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayKoaApplication } from '@midwayjs/koa';

import { ApolloServer, ServerRegistration } from 'apollo-server-koa';
import { buildSchemaSync } from 'type-graphql';

import { UserRole } from '../utils/constants';

import { authChecker } from '../utils/authChecker';

@Provide('GraphQLMiddleware')
export class GraphqlMiddleware implements IWebMiddleware {
  @Config('apollo')
  config: ServerRegistration;

  @App()
  app: IMidwayKoaApplication;

  resolve() {
    const server = new ApolloServer({
      schema: buildSchemaSync({
        resolvers: [path.resolve(this.app.getBaseDir(), 'resolver/*')],
        container: this.app.getApplicationContext(),
        authChecker,
        authMode: 'error',
        emitSchemaFile: true,
      }),
      context: {
        currentReqUser: {
          role: UserRole.ADMIN,
        },
      },
    });
    console.log('Apollo-GraphQL Invoke');

    return server.getMiddleware(this.config);
  }
}
