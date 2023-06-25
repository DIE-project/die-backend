import { Sequelize } from "sequelize";
import { DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "sqlite",
  storage: "/src/db/database.sqlite3",
});

export default db;
