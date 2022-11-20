import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';

export class CreateVehicleDto {
  id: string;

  vehicleUrl: string;

  originalSourceId: string;

  name: string;

  description: string;

  vehicleClass: string;

  length: number;

  pilot: People;

  films: Film[];

  constructor(vehicle: Partial<CreateVehicleDto>) {
    Object.assign(this, vehicle);
  }
}
