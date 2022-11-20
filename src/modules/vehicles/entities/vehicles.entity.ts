import {
  MAX_DESCRIPTION_VEHICLE_SIZE,
  MAX_NAME_VEHICLE_SIZE,
  MAX_URL_VEHICLE_SIZE,
  MAX_VEHICLE_CLASS_SIZE,
} from 'src/configs/constants';
import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({ name: 'vehicle' })
export class Vehicle {
  @Column({ primary: true })
  id: string;

  @Column({ length: MAX_URL_VEHICLE_SIZE, name: 'vehicle_url', nullable: true })
  vehicleUrl: string;

  @Column({ length: MAX_NAME_VEHICLE_SIZE, name: 'name', nullable: true })
  name: string;

  @Column({
    length: MAX_DESCRIPTION_VEHICLE_SIZE,
    name: 'description',
    nullable: true,
  })
  description: string;

  @Column({
    length: MAX_VEHICLE_CLASS_SIZE,
    name: 'vehicle_class',
    nullable: true,
  })
  vehicleClass: string;

  @Column({ name: 'length', nullable: true })
  length: number;

  @JoinTable()
  pilot: People;

  @ManyToMany(() => Film)
  films: Film[];

  constructor(vehicle: Partial<Vehicle>) {
    Object.assign(this, vehicle);
  }
}
