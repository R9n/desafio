import {
  MAX_CLASSIFICATION_SPECIE_SIZE,
  MAX_NAME_LOCATION_SIZE,
  MAX_PEOPLE_EYE_COLOR_SIZE,
  MAX_PEOPLE_HAIR_COLOR_SIZE,
  MAX_URL_SPECIE_SIZE,
} from 'src/configs/constants';
import { Film } from 'src/modules/films/entities/film-entity';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';

@Entity({ name: 'specie' })
export class Specie {
  @Column({ primary: true })
  id: string;

  @Column({ length: MAX_URL_SPECIE_SIZE, name: 'specie_url', nullable: true })
  specieUrl: string;

  @Column({ length: MAX_NAME_LOCATION_SIZE, name: 'name', nullable: true })
  name: string;

  @Column({
    length: MAX_CLASSIFICATION_SPECIE_SIZE,
    name: 'classification',
    nullable: true,
  })
  classification: string;

  @Column({
    length: MAX_PEOPLE_EYE_COLOR_SIZE,
    name: 'eye_color',
    nullable: true,
  })
  eyeColors: string;

  @Column({
    length: MAX_PEOPLE_HAIR_COLOR_SIZE,
    name: 'hair_color',
    nullable: true,
  })
  hairColors: string;

  @ManyToMany(() => Film)
  @JoinTable()
  films: Film[];

  @OneToMany(() => People, (people: People) => people.specie)
  peoples: People[];

  constructor(specie: Partial<Specie>) {
    Object.assign(this, specie);
  }
}
