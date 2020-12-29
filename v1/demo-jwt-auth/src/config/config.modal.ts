import { EggAppConfig, PowerPartial } from 'midway'
import { JwtConfig } from '@waiting/egg-jwt'


export interface DefaultConfig extends PowerPartial<EggAppConfig> {
  welcomeMsg: string
  jwt: JwtConfig
}
