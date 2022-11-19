import { Column, Entity } from 'typeorm';
@Entity({ name: 'movie' })
export class Movie {
  @Column({ primary: true })
  id: string;
}
