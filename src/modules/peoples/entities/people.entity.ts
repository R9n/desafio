import {
  MAX_PEOPLE_AGE_SIZE,
  MAX_PEOPLE_EYE_COLOR_SIZE,
  MAX_PEOPLE_GENDER_SIZE,
  MAX_PEOPLE_HAIR_COLOR_SIZE,
  MAX_PEOPLE_NAME_SIZE,
  MAX_URL_PEOPLE_SIZE,
} from 'src/configs/constants';
import { Film } from 'src/modules/films/entities/film-entity';
import { Specie } from 'src/modules/species/entities/specie.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity({ name: 'people' })
export class People {
  @Column({ primary: true })
  id: string;

  @Column({ length: MAX_PEOPLE_NAME_SIZE, name: 'name', nullable: false })
  name: string;

  @Column({ length: MAX_PEOPLE_GENDER_SIZE, name: 'gender', nullable: true })
  gender: string;

  @Column({
    length: MAX_PEOPLE_EYE_COLOR_SIZE,
    name: 'eye_color',
    nullable: true,
  })
  eyeColor: string;

  @Column({
    length: MAX_PEOPLE_HAIR_COLOR_SIZE,
    name: 'hair_color',
    nullable: true,
  })
  hairColor: string;

  @Column({ length: MAX_PEOPLE_AGE_SIZE, name: 'age', nullable: true })
  age: string;

  @Column({ length: MAX_URL_PEOPLE_SIZE, name: 'url', nullable: true })
  url: string;

  @ManyToMany(() => Film)
  films: Film[];

  @ManyToOne(() => Specie, (specie: Specie) => specie.peoples)
  specie: Specie;

  constructor(people: Partial<People>) {
    Object.assign(this, people);
  }
}
