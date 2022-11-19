import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from './constants';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Movie],
  synchronize: true,
};
