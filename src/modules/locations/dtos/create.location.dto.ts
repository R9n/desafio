import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';

export class CreateLocationDto {
  id: string;

  locationUrl: string;

  originalSourceId: string;

  name: string;

  climate: string;

  terrain: string;

  surfaceWater: string;

  film: Film;

  residents: People[];

  constructor(createLocationDto: Partial<CreateLocationDto>) {
    Object.assign(this, createLocationDto);
  }
}
