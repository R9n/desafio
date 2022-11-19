import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './modules/movies/movies.controller';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { RedisModule } from './modules/redis/redis-module';
import { getDbConfig } from './configs/database-config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(getDbConfig()),
    RedisModule,
  ],
  controllers: [AppController, MoviesController],
  providers: [AppService],
})
export class AppModule {}
