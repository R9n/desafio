import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Specie } from './entities/specie.entity';

@Injectable()
export class SpecieService {
  constructor(
    @InjectRepository(Specie)
    private specieRepository: Repository<Specie>,
  ) {}

  async saveSpecie(specie: Specie): Promise<Specie> {
    return this.specieRepository.save(specie);
  }
}
