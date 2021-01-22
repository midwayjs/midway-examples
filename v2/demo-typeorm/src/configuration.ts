import { Configuration } from '@midwayjs/decorator';

@Configuration({
  imports: ['@midwayjs/orm'],
  importConfigs: ['./config'],
})
export class ContainerConfiguration {}
