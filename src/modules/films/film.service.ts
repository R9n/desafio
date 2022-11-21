import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NOT_FOUND } from 'http-status';
import { PaginationResponseDto } from 'src/utils/dtos/pagination.response.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from '../../utils/dtos/pagination.query.dto';
import { Film } from './entities/film-entity';
import { RedisService } from '../redis/redis.service';
import { AppLogger } from 'src/utils/logger';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private filmsRepository: Repository<Film>,
    private readonly cacheServices: RedisService,
  ) {}

  async saveFilm(film: Film): Promise<Film> {
    return this.filmsRepository.save(film);
  }
  async getOne(filmId: string): Promise<Film> {
    try {
      const cachedFilm = await this.cacheServices.getItemFromCache(filmId);

      if (cachedFilm !== null) {
        AppLogger.info(`Film ${filmId} found on cache`);
        return new Film(cachedFilm);
      }

      AppLogger.info(
        `Film ${filmId} not found on cache, retriving from database`,
      );

      const filmFromDatabase = await this.filmsRepository.findOne({
        where: { id: filmId },
        relations: ['peoples', 'species', 'locations', 'vehicles'],
      });

      if (!filmFromDatabase) {
        throw new HttpException('Film not found', NOT_FOUND);
      }
      await this.cacheServices.putItemOnCache(filmId, filmFromDatabase);

      return filmFromDatabase;
    } catch (error) {
      AppLogger.error(`Error while trying to get the filmId ${filmId}`);
      AppLogger.error(error);
      throw error;
    }
  }

  async getMany(filterDto: PaginationDto): Promise<PaginationResponseDto> {
    try {
      AppLogger.info('Trying to get many films', filterDto);
      const queryBuilder = this.filmsRepository.createQueryBuilder('film');
      const itemCount = await queryBuilder.getCount();
      const films = await this.filmsRepository.find({
        relations: ['peoples', 'species', 'locations', 'vehicles'],
        skip: filterDto.offset,
        take: filterDto.limit,
        order: { releaseDate: filterDto.order },
      });

      return new PaginationResponseDto({
        currentItemCount: films.length,
        data: films,
        limit: filterDto.limit,
        offset: filterDto.offset,
        total: itemCount,
      });
    } catch (error) {
      AppLogger.error(`Error while trying to get many movies`);
      AppLogger.error(error);
      throw error;
    }
  }
}
