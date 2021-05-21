import { Configuration } from "@midwayjs/decorator";
import { ILifeCycle, IMidwayContainer } from "@midwayjs/core";
import { Sequelize } from 'sequelize-typescript'
import { User } from "./entities/user";
import { Post } from "./entities/post";
import { join } from 'path';

@Configuration({
  importConfigs: [join(__dirname, './config')],
})
export class ContainerConfiguration implements ILifeCycle {
  async onReady(container: IMidwayContainer) {

    const sequelize = new Sequelize({
      database: 'some_db',
      dialect: 'sqlite',
      username: 'root',
      password: '',
      storage: ':memory:',
    })

    sequelize.addModels([User, Post])

    await sequelize.sync({force: true});
  }
}
