import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Film } from 'src/modules/films/entities/film-entity';
import { Location } from 'src/modules/locations/entities/location.entity';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Specie } from 'src/modules/species/entities/specie.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicles.entity';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from './constants';

export function getDbConfig(): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [Film, People, Vehicle, Specie, Location],
    synchronize: true, // Geralmente não utilizamos synchronize como true
  }; // O correto mesmo é utilizar migrations para versionar o banco de dados
  // Não utilizei aqui apenas por questões de praticidade
}
