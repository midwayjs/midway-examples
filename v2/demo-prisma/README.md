# Midway-Prisma-Example

## QuickStart

```bash
npm install
npm run prisma
npm run dev
```

## Router

- GET `/api/users`: Query All Users
- GET `/api/user:id` Query User By ID
- POST `/api/create`: Create User
- POST `/api/update`: Update User
- POST `/api/delete`: Delete User

## Setup Prisma

- `npm run prisma:generate`: Generate [Prisma Client](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres#install-and-generate-prisma-client) to `/src/prisma/client`
- `npm run prisma:push`: Generate SQLite file to `/src/db.sqlite`
- `npm run prisma:migrate`: Whenever [Prisma Schema](https://www.prisma.io/docs/concepts/components/prisma-schema) (located at `/src/prisma/schema.prisma`) was modified, you should run this command to apply migrations to your database, for more details, see [Prisma Migration](https://www.prisma.io/docs/concepts/components/prisma-migrate)

Before you start project development for the first time, you must use `npm run prisma`(which includes `npm run prisma:generate` & `npm run prisma:push`) to generate Prisma Client and your sqlite file.

## Inject Prisma Connection

```typescript
@Configuration({
  importConfigs: ["./config"],
})
export class ContainerConfiguration implements ILifeCycle {
  @App()
  app: IMidwayApplication;

  async onReady(): Promise<void> {
    client.$connect();
    this.app.getApplicationContext().registerObject("prisma", client);
  }

  async onStop(): Promise<void> {
    client.$disconnect();
  }
}

```

See [Lifecycle Configuration](https://www.yuque.com/midwayjs/midway_v2/lifecycle) for more details about MidwayJS Lifecycle.

