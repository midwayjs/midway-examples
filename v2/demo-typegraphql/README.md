# Midway-Example-TypeGraphQL

## Quicktart

```bash
npm i
npm run dev
```

Open `http://127.0.0.1:7001/graphql` to visit [GraphQL Playground](https://github.com/graphql/graphql-playground)

## Develop

Put your config in corresponding namespace defined in [GraphQLMiddleware](src/middleware/graphql.ts), for example:

```typescript
// config.default.ts
export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  config.apollo = {
    path: "/graphql",
  } as ServerRegistration;

  return config;
};

// middleware/graphql.ts
@Provide("GraphQLMiddleware")
export class GraphqlMiddleware implements IWebMiddleware {
  
  @Config("apollo")
  config: ApolloMwConfig;

}
```

## Related Documentation

- [Apollo-GraphQL](https://www.apollographql.com/)
- [TypeGraphQL](https://typegraphql.com/)
- [GraphQL](https://graphql.org/)