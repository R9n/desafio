import { People } from 'src/modules/peoples/entities/people.entity';
import { Specie } from 'src/modules/species/entities/specie.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicles.entity';

export class CreateFilmDto {
  id: string;

  title: string;

  originalTitle: string;

  originalTitleRomanised: string;

  image: string;

  filmBanner: string;

  description: string;

  director: string;

  producer: string;

  releaseDate: number;

  runningTime: number;

  rtScore: number;

  url: string;

  peoples: People[];

  species: Specie[];

  locations: Location[];

  vehicles: Vehicle[];

  constructor(createFilmDto: Partial<CreateFilmDto>) {
    Object.assign(this, createFilmDto);
  }
}
