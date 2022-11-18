// Application config
const DEFAULT_APP_PORT = 3000;
export const APP_PORT = Number(process.env.APP_PORT || DEFAULT_APP_PORT);

//Database config
export const DB_PORT = 5432;
export const DB_HOST = String(process.env.DB_HOST);
export const DB_USER = String(process.env.DB_USER);
export const DB_PASSWORD = String(process.env.DB_PASSWORD);
export const DB_NAME = String(process.env.DB_NAME);
