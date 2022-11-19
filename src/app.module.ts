import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './modules/movies/movies.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { config } from 'dotenv';
import { Movie } from './entities/movie';
import { RedisModule } from './modules/redis/redis-module';

config();
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 8000,
      username: 'postgres',
      password: '123',
      database: 'desafio',
      entities: [Movie],
      synchronize: true,
    }),
    RedisModule,
  ],
  controllers: [AppController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
