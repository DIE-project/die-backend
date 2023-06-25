import { Sequelize } from "sequelize";
import sqlite3 from "sqlite3";
import { DB_NAME, DB_PASSWORD, DB_USER } from "../config.js";

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "sqlite",
});

export default db;
