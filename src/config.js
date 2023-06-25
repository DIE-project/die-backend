import { configDotenv } from "dotenv";
configDotenv();

export const PORT = 3000;

export const API_URL = process.env.API_URL;

console.log("API_URL", API_URL);
