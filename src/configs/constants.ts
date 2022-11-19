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
