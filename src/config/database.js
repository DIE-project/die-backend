// connect to postgres database

const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres:postgres@localhost:5432/inscripciones"
);

module.exports = db;
