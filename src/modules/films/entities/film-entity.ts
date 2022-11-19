import {
  MAX_DIRECTOR_NAME_SIZE,
  MAX_FILM_BANNER_SIZE,
  MAX_FILM_DESCRIPTION_SIZE,
  MAX_FILM_URL_SIZE,
  MAX_IMAGE_SIZE,
  MAX_ORIGINAL_TITLE_ROMANISED_SIZE,
  MAX_ORIGINAL_TITLE_SIZE,
  MAX_PRODUCER_NAME_SIZE,
  MAX_TITLE_FILM_SIZE,
} from 'src/configs/constants';
import { Location } from 'src/modules/locations/entities/location.entity';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Specie } from 'src/modules/species/entities/specie.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicles.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity({ name: 'film' })
export class Film {
  @Column({ primary: true })
  id: string;

  @Column({ name: 'original_source_id' })
  originalSourceId: string;

  @Column({ length: MAX_TITLE_FILM_SIZE, name: 'name', nullable: false })
  title: string;

  @Column({
    length: MAX_ORIGINAL_TITLE_SIZE,
    name: 'original_title',
    nullable: true,
  })
  originalTitle: string;

  @Column({
    length: MAX_ORIGINAL_TITLE_ROMANISED_SIZE,
    name: 'original_title_romanised',
    nullable: true,
  })
  originalTitleRomanised: string;

  @Column({ length: MAX_IMAGE_SIZE, name: 'image', nullable: true })
  image: string;

  @Column({
    length: MAX_FILM_BANNER_SIZE,
    name: 'film_banner',
    nullable: true,
  })
  filmBanner: string;

  @Column({
    length: MAX_FILM_DESCRIPTION_SIZE,
    name: 'description',
    nullable: true,
  })
  description: string;

  @Column({
    length: MAX_DIRECTOR_NAME_SIZE,
    name: 'director',
    nullable: true,
  })
  director: string;

  @Column({
    length: MAX_PRODUCER_NAME_SIZE,
    name: 'producer',
    nullable: true,
  })
  producer: string;

  @Column({
    name: 'release_date',
    nullable: true,
  })
  releaseDate: number;

  @Column({
    name: 'running_time',
    nullable: true,
  })
  runningTime: number;

  @Column({ name: 'rt_score', nullable: true })
  rtScore: number;

  @Column({ length: MAX_FILM_URL_SIZE, name: 'url', nullable: true })
  url: string;

  @ManyToMany(() => People)
  @JoinTable()
  categories: People[];

  @ManyToMany(() => Specie)
  @JoinTable()
  species: Specie[];

  @OneToMany(() => Location, (location: Location) => location.film)
  locations: Location[];

  @ManyToMany(() => Vehicle)
  @JoinTable()
  vehicles: Vehicle[];
}
