import * as path from 'path';
import { Provide, Config, App } from '@midwayjs/decorator';
import {
  IWebMiddleware,
  IMidwayKoaApplication,
  IMidwayKoaContext,
  IMidwayKoaNext,
} from '@midwayjs/koa';

import { ApolloServer, ServerRegistration } from 'apollo-server-koa';
import { buildSchemaSync } from 'type-graphql';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from 'apollo-server-core';

import { UserRole } from '../utils/constants';

import { authChecker } from '../utils/authChecker';

@Provide('GraphQLMiddleware')
export class GraphqlMiddleware implements IWebMiddleware {
  @Config('apollo')
  config: ServerRegistration;

  @App()
  app: IMidwayKoaApplication;

  resolve() {
    return async (_ctx: IMidwayKoaContext, next: IMidwayKoaNext) => {
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
        plugins: [
          process.env.NODE_ENV === 'production'
            ? ApolloServerPluginLandingPageDisabled()
            : ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
      });

      await server.start();
      console.log('Apollo-GraphQL Invoke');

      server.applyMiddleware({
        app: this.app,
        ...this.config,
      });

      await next();
    };
  }
}
