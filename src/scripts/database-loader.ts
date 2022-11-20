import {
  GHIBLI_API_HOST,
  MAX_RECORDS_TO_PULL_FROM_GHIBLI,
} from 'src/configs/constants';
import { AppLogger } from 'src/utils/logger';
import { HttpService } from '@nestjs/axios';
import { FilmService } from 'src/modules/films/film.service';
import { People } from 'src/modules/peoples/entities/people.entity';
import { Specie } from 'src/modules/species/entities/specie.entity';
import { Location } from 'src/modules/locations/entities/location.entity';
import { Vehicle } from 'src/modules/vehicles/entities/vehicles.entity';
import { Film } from 'src/modules/films/entities/film-entity';

export async function loadGhibliDATA(
  httpService: HttpService,
  filmService: FilmService,
): Promise<void> {
  try {
    const maxFilmsToPull = MAX_RECORDS_TO_PULL_FROM_GHIBLI;

    const ghibliBaseEndpoint = GHIBLI_API_HOST;

    AppLogger.info('Populating local database');

    AppLogger.info(`Getting ${maxFilmsToPull} films from the GHIBLI API...`);

    const sourceApiEndpoint = `${ghibliBaseEndpoint}/films?limit=${maxFilmsToPull}`;

    const sourceData = await httpService.axiosRef.get(sourceApiEndpoint);

    AppLogger.info('Films pulled successfully');

    AppLogger.info('Inserting on local database');

    for (const film of sourceData.data) {
      const newFilm = new Film({
        director: film.director,
        id: film.id,
        title: film.title,
        originalTitle: film.original_title,
        originalTitleRomanised: film.original_title_romanised,
        image: film.image,
        filmBanner: film.movie_banner,
        description: film.description,
        producer: film.producer,
        releaseDate: film.release_date,
        runningTime: film.running_time,
        rtScore: film.rt_score,
        url: film.url,
      });

      newFilm.peoples = [];
      newFilm.vehicles = [];
      newFilm.locations = [];
      newFilm.species = [];

      for (const people of film.people) {
        const peoples = await getPeoples(people, httpService);

        newFilm.peoples = newFilm.peoples.concat(peoples);
      }
      for (const specie of film.species) {
        const species = await getSpecies(specie, httpService);
        newFilm.species = newFilm.species.concat(species);
      }
      for (const location of film.locations) {
        const locations = await getLocations(location, httpService);
        newFilm.locations = newFilm.locations.concat(locations);
      }
      for (const vehicle of film.vehicles) {
        const vehicles = await getVehicles(vehicle, httpService);
        newFilm.vehicles = newFilm.vehicles.concat(vehicles);
      }
      await filmService.saveFilm(newFilm);
    }
  } catch (error) {
    AppLogger.error('An unknow error ocurred while populating local database');
    AppLogger.error(error);
    throw error;
  }
}

async function getPeoples(
  peopleUrl: string,
  httpService: HttpService,
): Promise<People[]> {
  const isAllPeoples = peopleUrl === 'https://ghibliapi.herokuapp.com/people/';
  const peoples: People[] = [];

  const fetchResponse = await httpService.axiosRef.get(peopleUrl);

  const responseData = fetchResponse.data;

  if (isAllPeoples) {
    for (const people of responseData) {
      const newPeople = new People({});
      peoples.push(newPeople);
    }
  } else {
    const newPeople = new People({});
    peoples.push(newPeople);
  }
  return peoples;
}
async function getSpecies(
  specieUrl: string,
  httpService: HttpService,
): Promise<Specie[]> {
  const isAllSpecies = specieUrl === 'https://ghibliapi.herokuapp.com/species/';
  const species: Specie[] = [];

  const fetchResponse = await httpService.axiosRef.get(specieUrl);

  const responseData = fetchResponse.data;

  if (isAllSpecies) {
    for (const specie of responseData) {
      const newSpecie = new Specie({});
      species.push(newSpecie);
    }
  } else {
    const newSpecie = new Specie({});
    species.push(newSpecie);
  }
  return species;
}
async function getLocations(
  locationUrl: string,
  httpService: HttpService,
): Promise<Location[]> {
  const isAllLocations =
    locationUrl === 'https://ghibliapi.herokuapp.com/locations/';
  const locations: Location[] = [];

  const fetchResponse = await httpService.axiosRef.get(locationUrl);

  const responseData = fetchResponse.data;

  if (isAllLocations) {
    for (const location of responseData) {
      const newLocation = new Location({});
      locations.push(newLocation);
    }
  } else {
    const newLocation = new Location({});
    locations.push(newLocation);
  }
  return locations;
}
async function getVehicles(
  vehicleUrl: string,
  httpService: HttpService,
): Promise<Vehicle[]> {
  const isAllVehicles =
    vehicleUrl === 'https://ghibliapi.herokuapp.com/vehicles/';
  const vehicles: Vehicle[] = [];

  const fetchResponse = await httpService.axiosRef.get(vehicleUrl);

  const responseData = fetchResponse.data;

  if (isAllVehicles) {
    for (const vehicle of responseData) {
      const newVehicle = new Vehicle({});
      vehicles.push(newVehicle);
    }
  } else {
    const newVehicle = new Vehicle({});
    vehicles.push(newVehicle);
  }
  return vehicles;
}
