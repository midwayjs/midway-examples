# Midway-GraphQL-Example

## QuickStart

```bash
npm i
npm run dev
open http://localhost:7001/graphql
```

**This demo use [ApolloServer.getMiddleware](https://www.apollographql.com/docs/apollo-server/api/apollo-server/#getmiddleware) to mount GraphQL Server as a middleware of the entire application, which means you can setup GraphQL Server & RESTFul API without conflict(just make sure the path you specified for Apollo-Server is not registered as controller.)**

## GraphQL Query/Mutation Example

- [GraphQL Schema](schema.gql)
- [Query Example](src/graphql/query.gql)
- [Mutation Example](src/graphql/mutation.gql)

## Configuration

Configurate `Apollo-Server` and `TypeGraphQL` in [configuration.ts](src/configuration.ts).

- [Apollo-GraphQL](https://www.apollographql.com/)
- [TypeGraphQL](https://typegraphql.com/)
