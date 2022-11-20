import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { loadGhibliDATA } from './scripts/database-loader';
import { FilmService } from './modules/films/film.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly httpService: HttpService,
    private readonly filmService: FilmService,
  ) {}

  async onModuleInit(): Promise<void> {
    await loadGhibliDATA(this.httpService, this.filmService);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
