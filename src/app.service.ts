import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { loadGhibliDATA } from './scripts/database-loader';
import { FilmService } from './modules/films/film.service';
import { SpecieService } from './modules/species/specie.service';
import { VehicleService } from './modules/vehicles/vehicle.service';
import { LocationService } from './modules/locations/location.service';
import { PeopleService } from './modules/peoples/people.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly httpService: HttpService,
    private readonly specieService: SpecieService,
    private readonly vehicleService: VehicleService,
    private readonly locationService: LocationService,
    private readonly peopleService: PeopleService,
    private readonly filmService: FilmService,
  ) {}

  async onModuleInit(): Promise<void> {
    await loadGhibliDATA(
      this.httpService,
      this.specieService,
      this.vehicleService,
      this.locationService,
      this.peopleService,
      this.filmService,
    );
  }

  getHello(): string {
    return 'Hello World!';
  }
}
