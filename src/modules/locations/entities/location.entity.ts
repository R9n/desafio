import {
  MAX_CLIMATE_LOCATION_SIZE,
  MAX_NAME_LOCATION_SIZE,
  MAX_SURFACE_WATER_LOCATION_SIZE,
  MAX_TERRAIN_LOCATION_SIZE,
  MAX_URL_LOCATION_SIZE,
} from 'src/configs/constants';
import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Column, Entity, JoinTable, ManyToOne } from 'typeorm';

@Entity({ name: 'location' })
export class Location {
  @Column({ primary: true })
  id: string;

  @Column({
    length: MAX_URL_LOCATION_SIZE,
    name: 'location_url',
    nullable: true,
  })
  locationUrl: string;

  @Column({ name: 'original_source_id' })
  originalSourceId: string;

  @Column({ length: MAX_NAME_LOCATION_SIZE, name: 'name', nullable: true })
  name: string;

  @Column({
    length: MAX_CLIMATE_LOCATION_SIZE,
    name: 'climate',
    nullable: true,
  })
  climate: string;

  @Column({
    length: MAX_TERRAIN_LOCATION_SIZE,
    name: 'terrain',
    nullable: true,
  })
  terrain: string;

  @Column({
    length: MAX_SURFACE_WATER_LOCATION_SIZE,
    name: 'surface_water',
    nullable: true,
  })
  surfaceWater: string;

  @ManyToOne(() => Film, (film: Film) => film.locations)
  film: Film;

  @JoinTable()
  residents: People[];

  constructor(location: Partial<Location>) {
    Object.assign(this, location);
  }
}
