import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './entities/people.entity';
import { PeopleService } from './people.service';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
