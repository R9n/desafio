import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NOT_FOUND } from 'http-status';
import { PaginationResponseDto } from 'src/utils/dtos/pagination.response.dto';
import { Repository } from 'typeorm';
import { PaginationDto } from '../../utils/dtos/pagination.query.dto';
import { Film } from './entities/film-entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private filmsRepository: Repository<Film>,
  ) {}

  async saveFilm(film: Film): Promise<Film> {
    return this.filmsRepository.save(film);
  }
  async getOne(filmId: string): Promise<Film> {
    const film = await this.filmsRepository.findOne({
      where: { id: filmId },
      relations: ['peoples', 'species', 'locations', 'vehicles'],
    });
    if (!film) {
      throw new HttpException('Film not found', NOT_FOUND);
    }
    return film;
  }
  async getMany(filterDto: PaginationDto): Promise<PaginationResponseDto> {
    try {
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
    } catch (error) {}
  }
}
