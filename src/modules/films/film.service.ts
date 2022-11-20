import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
