import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';

export class CreateSpecieDto {
  id: string;

  specieUrl: string;

  originalSourceId: string;

  name: string;

  classification: string;

  eyeColor: string;

  hairColor: string;

  films: Film[];

  peoples: People[];

  constructor(createSpecieDto: Partial<CreateSpecieDto>) {
    Object.assign(this, createSpecieDto);
  }
}
