# Midway-GraphQL-Example

## QuickStart

```bash
npm i
npm run dev
open http://localhost:7001/graphql
```

**Notice: Apollo Server V3 has made same [Breaking Change](https://www.apollographql.com/docs/apollo-server/migration/)**

Comparing to example V2, this example apply modifications to：

- `await server.start()` before calling applyMiddleware, see reson [here](https://www.apollographql.com/docs/apollo-server/migration/#start-now-mandatory-for-non-serverless-framework-integrations), [related commit](https://github.com/apollographql/apollo-server/commit/9c38dcc9ace37adf34b8ac910aaaff9d72b83d86#diff-2dc73aa32a8633418e9df6b6fdae7be7a701459eeb5e3b3bc4682ac5f04a2a49L326)

- Still use GraphQL Playground as developing console, instead of [Apollo Landing Page](https://www.apollographql.com/docs/apollo-server/testing/build-run-queries/) which was introduced in V3, [related docs](https://www.apollographql.com/docs/apollo-server/migration/#graphql-playground)
  > **Note:** If you're enabling Apollo Landing Page, remember to set CORS options.


**This demo use [ApolloServer.applyMiddleware](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#getmiddleware) to mount GraphQL Server as a middleware of the entire application, which means you can setup GraphQL Server & RESTFul API without conflict(just make sure the path you specified for Apollo-Server is not registered as controller.)**

## GraphQL Query/Mutation Example

- [GraphQL Schema](schema.gql)
- [Query Example](src/graphql/query.gql)
- [Mutation Example](src/graphql/mutation.gql)

## Configuration

Configurate `Apollo-Server` and `TypeGraphQL` in [configuration.ts](src/configuration.ts).

- [Apollo-GraphQL](https://www.apollographql.com/)
- [TypeGraphQL](https://typegraphql.com/)
