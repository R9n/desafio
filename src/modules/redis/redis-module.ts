import {
  CACHE_MANAGER,
  CacheModule as BaseCacheModule,
  Inject,
  Module,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { getCacheConfig } from 'src/configs/redis-config';

@Module({
  imports: [
    BaseCacheModule.registerAsync({
      useFactory: () => {
        return getCacheConfig();
      },
    }),
  ],
  exports: [BaseCacheModule],
})
export class RedisModule {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}
}
