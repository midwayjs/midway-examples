import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';

@Configuration({
  imports: [
    swagger
  ]
})
export class ContainerConfiguration {

}
