import { Film } from 'src/modules/films/entities/film-entity';
import { Specie } from 'src/modules/species/entities/specie.entity';

export class CreatePeopleDto {
  id: string;

  Name: string;

  gender: string;

  eyeColor: string;

  hairColor: string;

  age: number;

  url: string;

  films: Film[];

  specie: Specie;

  constructor(createPeopleDto: Partial<CreatePeopleDto>) {
    Object.assign(this, createPeopleDto);
  }
}
