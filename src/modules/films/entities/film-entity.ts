import { ApiProperty } from '@nestjs/swagger';
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
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity({ name: 'film' })
export class Film {
  @ApiProperty({ description: 'Entity id' })
  @Column({ primary: true })
  id: string;

  @ApiProperty({ description: 'Film title' })
  @Column({ length: MAX_TITLE_FILM_SIZE, name: 'name', nullable: false })
  title: string;

  @ApiProperty({ description: 'Original film title' })
  @Column({
    length: MAX_ORIGINAL_TITLE_SIZE,
    name: 'original_title',
    nullable: true,
  })
  originalTitle: string;

  @ApiProperty({ description: 'Original film title romanised' })
  @Column({
    length: MAX_ORIGINAL_TITLE_ROMANISED_SIZE,
    name: 'original_title_romanised',
    nullable: true,
  })
  originalTitleRomanised: string;

  @ApiProperty({ description: 'Film image url' })
  @Column({ length: MAX_IMAGE_SIZE, name: 'image', nullable: true })
  image: string;

  @ApiProperty({ description: 'Film banner url' })
  @Column({
    length: MAX_FILM_BANNER_SIZE,
    name: 'film_banner',
    nullable: true,
  })
  filmBanner: string;

  @ApiProperty({ description: 'Film description' })
  @Column({
    length: MAX_FILM_DESCRIPTION_SIZE,
    name: 'description',
    nullable: true,
  })
  description: string;

  @ApiProperty({ description: 'Film director' })
  @Column({
    length: MAX_DIRECTOR_NAME_SIZE,
    name: 'director',
    nullable: true,
  })
  director: string;

  @ApiProperty({ description: 'Film producer' })
  @Column({
    length: MAX_PRODUCER_NAME_SIZE,
    name: 'producer',
    nullable: true,
  })
  producer: string;

  @ApiProperty({ description: 'Film release date (only the year)' })
  @Column({
    type: 'numeric',
    name: 'release_date',
    nullable: true,
  })
  releaseDate: number;

  @ApiProperty({ description: 'Film running time' })
  @Column({
    type: 'numeric',
    name: 'running_time',
    nullable: true,
  })
  runningTime: number;

  @ApiProperty({ description: 'Film rt score' })
  @Column({ type: 'numeric', name: 'rt_score', nullable: true })
  rtScore: number;

  @ApiProperty({ description: 'Film url on source api' })
  @Column({ length: MAX_FILM_URL_SIZE, name: 'url', nullable: true })
  url: string;

  @ApiProperty({ description: 'Peoples on the film' })
  @ManyToMany(() => People)
  @JoinTable()
  peoples: People[];

  @ApiProperty({ description: 'Species found on film' })
  @ManyToMany(() => Specie)
  @JoinTable()
  species: Specie[];

  @ApiProperty({ description: 'Locations found on film' })
  @ManyToMany(() => Location)
  @JoinTable()
  locations: Location[];

  @ApiProperty({ description: 'Vehicles found on film' })
  @ManyToMany(() => Vehicle)
  @JoinTable()
  vehicles: Vehicle[];

  constructor(film: Partial<Film>) {
    Object.assign(this, film);
  }
}
