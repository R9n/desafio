import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './modules/films/film.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { RedisModule } from './modules/redis/redis-module';
import { getDbConfig } from './configs/database-config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDbConfig()),
    RedisModule,
    HttpModule,
  ],
  controllers: [AppController, FilmsController],
  providers: [AppService],
})
export class AppModule {}
