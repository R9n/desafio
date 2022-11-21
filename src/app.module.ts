import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './modules/films/film.controller';
import { RedisModule } from './modules/redis/redis.module';
import { getDbConfig } from './configs/database.config';
import { HttpModule } from '@nestjs/axios';
import { FilmModule } from './modules/films/film.module';
import { SpecieModule } from './modules/species/specie.module';
import { LocationModule } from './modules/locations/location.module';
import { VehicleModule } from './modules/vehicles/vehicle.module';
import { PeopleModule } from './modules/peoples/people.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDbConfig()),
    RedisModule,
    HttpModule,
    FilmModule,
    SpecieModule,
    LocationModule,
    VehicleModule,
    PeopleModule,
  ],
  controllers: [AppController, FilmsController],
  providers: [AppService],
})
export class AppModule {}
