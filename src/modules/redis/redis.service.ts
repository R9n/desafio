import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MAX_TIME_TO_LIVE_SECONDS } from 'src/configs/constants';
import { AppLogger } from 'src/utils/logger';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheRepository: Cache) {}

  async getItemFromCache(key: string): Promise<unknown> {
    try {
      AppLogger.info(`Getting object with key ${key} from cache`);
      return this.cacheRepository.get(key);
    } catch (error) {
      AppLogger.error(`Unknow error getting key ${key} from cache`);
      AppLogger.error(error);
      throw error;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  async putItemOnCache(key: string, object: any): Promise<unknown> {
    try {
      AppLogger.info(
        `Setting object with key ${key} on cache: \n ${JSON.stringify(
          object,
        ).substring(0, 120)}...`,
      );
      return this.cacheRepository.set(
        key,
        object,
        CACHE_MAX_TIME_TO_LIVE_SECONDS,
      );
    } catch (error) {
      AppLogger.error(`Unknow error setting key ${key} on cache`);
      AppLogger.error(error);
      throw error;
    }
  }
}
