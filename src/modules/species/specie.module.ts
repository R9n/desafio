import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specie } from './entities/specie.entity';
import { SpecieService } from './specie.service';

@Module({
  imports: [TypeOrmModule.forFeature([Specie])],
  providers: [SpecieService],
  exports: [SpecieService],
})
export class SpecieModule {}
