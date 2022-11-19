import * as redisStore from 'cache-manager-ioredis';
import {
  CACHE_SERVICE_HOST,
  CACHE_SERVICE_PASSWORD,
  CACHE_SERVICE_PORT,
} from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCacheConfig(): any {
  return {
    store: redisStore,
    host: CACHE_SERVICE_HOST,
    port: CACHE_SERVICE_PORT,
    password: CACHE_SERVICE_PASSWORD,
  };
}
