// Application config
export const DEFAULT_APP_PORT = 3000;

//Database config
export const DB_PORT = Number.parseInt(process.env.DB_PORT, 10);
export const DB_HOST = String(process.env.DB_HOST);
export const DB_USER = String(process.env.DB_USER);
export const DB_PASSWORD = String(process.env.DB_PASSWORD);
export const DB_NAME = String(process.env.DB_NAME);

//Cache config
export const CACHE_SERVICE_PORT = Number.parseInt(
  process.env.CACHE_SERVICE_PORT,
  10,
);
export const CACHE_SERVICE_PASSWORD = String(
  process.env.CACHE_SERVICE_PASSWORD,
);
export const CACHE_SERVICE_HOST = String(process.env.CACHE_SERVICE_HOST);

/*
Vou generalizar os valores mínimos para todos os campos como sendo 0
dado que estamos em um cenário controlado que não viria um tamanho menor que 0
poreḿ em uma api real o correto é definir os mínimos e máximos :)
*/

//locations
export const MIN_LOCATION_FILDS_SIZE = 0;
export const MAX_URL_LOCATION_SIZE = 180;
export const MAX_NAME_LOCATION_SIZE = 180;
export const MAX_CLIMATE_LOCATION_SIZE = 180;
export const MAX_TERRAIN_LOCATION_SIZE = 180;
export const MAX_SURFACE_WATER_LOCATION_SIZE = 180;

//peoples
export const MIN_PEOPLE_FILDS_SIZE = 0;
export const MAX_URL_PEOPLE_SIZE = 120;
export const MAX_PEOPLE_NAME_SIZE = 80;
export const MAX_PEOPLE_GENDER_SIZE = 15;
export const MAX_PEOPLE_EYE_COLOR_SIZE = 80;
export const MAX_PEOPLE_HAIR_COLOR_SIZE = 80;
export const MAX_PEOPLE_AGE_SIZE = 56;

//species
export const MIN_SPECIES_FILDS_SIZE = 0;
export const MAX_URL_SPECIE_SIZE = 180;
export const MAX_NAME_SPECIE_SIZE = 180;
export const MAX_CLASSIFICATION_SPECIE_SIZE = 180;

//vehicles
export const MIN_VEHICLE_FILDS_SIZE = 0;
export const MAX_URL_VEHICLE_SIZE = 180;
export const MAX_NAME_VEHICLE_SIZE = 180;
export const MAX_DESCRIPTION_VEHICLE_SIZE = 180;
export const MAX_VEHICLE_CLASS_SIZE = 180;

//Film
export const MIN_FILM_FILDS_SIZE = 0;
export const MAX_TITLE_FILM_SIZE = 80;
export const MAX_ORIGINAL_TITLE_SIZE = 180;
export const MAX_ORIGINAL_TITLE_ROMANISED_SIZE = 180;
export const MAX_IMAGE_SIZE = 180;
export const MAX_FILM_BANNER_SIZE = 180;
export const MAX_FILM_DESCRIPTION_SIZE = 1024;
export const MAX_DIRECTOR_NAME_SIZE = 180;
export const MAX_PRODUCER_NAME_SIZE = 180;
export const MAX_RELEASE_DATE_SIZE = 180;
export const MAX_FILM_URL_SIZE = 180;

//Ghibli API
export const MAX_RECORDS_TO_PULL_FROM_GHIBLI = Number.parseInt(
  process.env.MAX_RECORDS_TO_PULL_FROM_GHIBLI,
  10,
);
export const GHIBLI_API_HOST = String(process.env.GHIBLI_API_HOST);
