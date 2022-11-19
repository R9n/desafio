import {
  GHIBLI_API_HOST,
  MAX_RECORDS_TO_PULL_FROM_GHIBLI,
} from 'src/configs/constants';
import { AppLogger } from 'src/utils/logger';
import { HttpService } from '@nestjs/axios';

export async function loadGhibliDATA(httpService: HttpService): Promise<void> {
  try {
    const maxFilmsToPull = MAX_RECORDS_TO_PULL_FROM_GHIBLI;
    const ghibliBaseEndpoint = GHIBLI_API_HOST;

    AppLogger.info('Populating local database');
    AppLogger.info(`Getting ${maxFilmsToPull} films from the GHIBLI API...`);

    const ghibliEndpoint = `${ghibliBaseEndpoint}/films?limit=${maxFilmsToPull}`;

    const ghibliData = await httpService.axiosRef.get(ghibliEndpoint);

    console.log('data', ghibliData);
    AppLogger.info('Films pulled successfully');
    AppLogger.info('Inserting on local database');
  } catch (error) {
    AppLogger.error('An unknow error ocurred while populating local database');
    AppLogger.error(error);
    throw error;
  }
}
