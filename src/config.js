import { configDotenv } from "dotenv";
configDotenv();

export const PORT = 3000;

export const API_URL = process.env.API_URL;

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;

console.log("API_URL", API_URL);
