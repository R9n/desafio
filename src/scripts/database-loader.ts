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
import { PeopleService } from 'src/modules/peoples/people.service';
import { VehicleService } from 'src/modules/vehicles/vehicle.service';
import { SpecieService } from 'src/modules/species/specie.service';
import { LocationService } from 'src/modules/locations/location.service';

export async function loadGhibliDATA(
  httpService: HttpService,
  specieService: SpecieService,
  vehicleService: VehicleService,
  locationService: LocationService,
  peopleService: PeopleService,
  filmService: FilmService,
): Promise<void> {
  try {
    const maxFilmsToPull = MAX_RECORDS_TO_PULL_FROM_GHIBLI;

    const ghibliBaseEndpoint = GHIBLI_API_HOST;

    AppLogger.info('Populating/Updating local database');

    AppLogger.info(`Getting ${maxFilmsToPull} films from the GHIBLI API...`);

    AppLogger.info(`Getting Locations...`);
    await saveAllLocations(locationService, httpService, ghibliBaseEndpoint);
    AppLogger.info(`Locations sucessfully saved`);

    AppLogger.info(`Getting Peoples...`);
    await saveAllPeoples(peopleService, httpService, ghibliBaseEndpoint);
    AppLogger.info(`Peoples sucessfully saved`);

    AppLogger.info(`Getting Species...`);
    await saveAllSpecies(specieService, httpService, ghibliBaseEndpoint);
    AppLogger.info(`Species sucessfully saved`);

    AppLogger.info(`Getting Vehicles...`);
    await saveAllVehicles(vehicleService, httpService, ghibliBaseEndpoint);
    AppLogger.info(`Vehicles sucessfully saved`);

    const sourceApiEndpoint = `${ghibliBaseEndpoint}/films?limit=${maxFilmsToPull}`;

    AppLogger.info('Getting films from source api');

    const sourceData = await httpService.axiosRef.get(sourceApiEndpoint);

    AppLogger.info('Films pulled successfully');

    AppLogger.info('Inserting on local database, please await...');

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
      AppLogger.info('Saving film');
      await filmService.saveFilm(newFilm);
    }

    AppLogger.info(`${maxFilmsToPull} films inserted/updated successfully!`);
    AppLogger.info('Proceeding to application startup');
  } catch (error) {
    AppLogger.error('An unknow error ocurred while populating local database');
    AppLogger.error('Aborting application startup');
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
      const newPeople = new People({
        age: people.age,
        eyeColor: people.eye_color,
        gender: people.gender,
        hairColor: people.hair_color,
        id: people.id,
        name: people.name,
        url: people.url,
      });
      peoples.push(newPeople);
    }
  } else {
    const newPeople = new People({
      age: responseData.age,
      eyeColor: responseData.eye_color,
      gender: responseData.gender,
      hairColor: responseData.hair_color,
      id: responseData.id,
      name: responseData.name,
      url: responseData.url,
    });
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
      const newSpecie = new Specie({
        classification: specie.classification,
        eyeColors: specie.eye_colors,
        hairColors: specie.hair_colors,
        id: specie.id,
        name: specie.name,
        specieUrl: specie.url,
      });
      species.push(newSpecie);
    }
  } else {
    const newSpecie = new Specie({
      classification: responseData.classification,
      eyeColors: responseData.eye_colors,
      hairColors: responseData.hair_colors,
      id: responseData.id,
      name: responseData.name,
      specieUrl: responseData.url,
    });
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
      const newLocation = new Location({
        climate: location.climate,
        id: location.id,
        locationUrl: location.url,
        name: location.name,
        surfaceWater: location.surface_water,
        terrain: location.terrain,
      });
      locations.push(newLocation);
    }
  } else {
    const newLocation = new Location({
      climate: responseData.climate,
      id: responseData.id,
      locationUrl: responseData.url,
      name: responseData.name,
      surfaceWater: responseData.surface_water,
      terrain: responseData.terrain,
    });
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
      const newVehicle = new Vehicle({
        description: vehicle.description,
        id: vehicle.id,
        length: Number.parseFloat(vehicle.length),
        name: vehicle.name,
        vehicleClass: vehicle.vehicle_class,
        vehicleUrl: vehicle.url,
      });
      vehicles.push(newVehicle);
    }
  } else {
    const newVehicle = new Vehicle({
      description: responseData.description,
      id: responseData.id,
      length: responseData.length,
      name: responseData.name,
      vehicleClass: responseData.vehicle_class,
      vehicleUrl: responseData.url,
    });
    vehicles.push(newVehicle);
  }
  return vehicles;
}

async function saveAllPeoples(
  peopleService: PeopleService,
  httpService: HttpService,
  ghibliBaseEndpoint: string,
): Promise<void> {
  const allPeoplesEndpoint = `${ghibliBaseEndpoint}/people/`;
  const allPeoples = await getPeoples(allPeoplesEndpoint, httpService);
  for (const people of allPeoples) {
    await peopleService.savePeople(people);
  }
}

async function saveAllVehicles(
  vehicleService: VehicleService,
  httpService: HttpService,
  ghibliBaseEndpoint: string,
): Promise<void> {
  const allVehicleEndpoint = `${ghibliBaseEndpoint}/vehicles/`;
  const allVehicles = await getVehicles(allVehicleEndpoint, httpService);
  for (const vehicle of allVehicles) {
    await vehicleService.saveVehicle(vehicle);
  }
}

async function saveAllSpecies(
  specieService: SpecieService,
  httpService: HttpService,
  ghibliBaseEndpoint: string,
): Promise<void> {
  const allSpeciesEndpoint = `${ghibliBaseEndpoint}/species/`;
  const allSpecies = await getSpecies(allSpeciesEndpoint, httpService);
  for (const specie of allSpecies) {
    await specieService.saveSpecie(specie);
  }
}

async function saveAllLocations(
  locationService: LocationService,
  httpService: HttpService,
  ghibliBaseEndpoint: string,
): Promise<void> {
  const allLocationsEndpoint = `${ghibliBaseEndpoint}/locations/`;
  const allLocations = await getLocations(allLocationsEndpoint, httpService);
  for (const location of allLocations) {
    await locationService.saveLocation(location);
  }
}
