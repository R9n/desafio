import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './entities/people.entity';

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peoplesRepository: Repository<People>,
  ) {}

  async savePeople(people: People): Promise<People> {
    return this.peoplesRepository.save(people);
  }
}
