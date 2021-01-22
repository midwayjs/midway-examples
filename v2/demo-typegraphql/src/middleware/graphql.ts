import * as path from "path";
import { Provide, Config, App } from "@midwayjs/decorator";
import { IWebMiddleware, IMidwayKoaApplication } from "@midwayjs/koa";

import { ApolloServer, ServerRegistration } from "apollo-server-koa";
import { buildSchemaSync } from "type-graphql";

// extra config
type ApolloMwConfig = { [key: string]: any } & ServerRegistration;

@Provide("GraphQLMiddleware")
export class GraphqlMiddleware implements IWebMiddleware {
  @Config("apollo")
  config: ApolloMwConfig;

  @App()
  app: IMidwayKoaApplication;

  resolve() {
    console.log(path.resolve(this.app.getBaseDir(), "resolver/*"));
    const server = new ApolloServer({
      schema: buildSchemaSync({
        resolvers: [path.resolve(this.app.getBaseDir(), "resolver/*")],
        container: this.app.getApplicationContext(),
      }),
    });

    return server.getMiddleware(this.config);
  }
}
