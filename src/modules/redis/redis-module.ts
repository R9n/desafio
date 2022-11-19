import {
  CACHE_MANAGER,
  CacheModule as BaseCacheModule,
  Inject,
  Module,
} from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';
import { Cache } from 'cache-manager';

@Module({
  imports: [
    BaseCacheModule.registerAsync({
      useFactory: () => {
        return {
          store: redisStore,
          host: 'localhost',
          port: 6000,
          password: '123456789',
        };
      },
    }),
  ],
  exports: [BaseCacheModule],
})
export class RedisModule {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}
}
