import { App, Configuration } from "@midwayjs/decorator";
import { ILifeCycle, IMidwayApplication } from "@midwayjs/core";
import chalk from "chalk";
import dotenv from "dotenv";

import { PrismaClient } from "./prisma/client";

// Prisma require env variables
dotenv.config();

const client = new PrismaClient();

@Configuration({
  importConfigs: ["./config"],
})
export class ContainerConfiguration implements ILifeCycle {
  @App()
  app: IMidwayApplication;

  async onReady(): Promise<void> {
    client.$connect();
    console.log(chalk.greenBright("[ Prisma ] Prisma Client Connected"));
    this.app.getApplicationContext().registerObject("prisma", client);
    console.log(chalk.greenBright("[ Prisma ] Prisma Client Injected"));
    // Initial Data Seeding
    await client.user.create({
      data: {
        name: "张三",
        email: `${Math.floor(Math.random() * 1000)}abc@gmail.com`,
      },
    });
    console.log(
      chalk.greenBright("[ Prisma ] Prisma Client Initial Data Inserted")
    );
  }

  async onStop(): Promise<void> {
    client.$disconnect();
  }
}
