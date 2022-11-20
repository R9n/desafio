import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from './entities/film-entity';
import { FilmService } from './film.service';

@Module({
  imports: [TypeOrmModule.forFeature([Film])],
  providers: [FilmService],
  exports: [FilmService],
})
export class FilmModule {}
