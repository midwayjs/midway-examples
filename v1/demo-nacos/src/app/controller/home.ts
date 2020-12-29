import { controller, get, provide, Context, inject } from 'midway';
import { ConfigService } from '../../service/configService';

@provide()
@controller('/')
export class HomeController {

  @inject()
  configService: ConfigService;

  @get('/')
  async index(ctx: Context) {
    ctx.body = 'get data from nacos server => ' + this.configService.getData();
  }

}
