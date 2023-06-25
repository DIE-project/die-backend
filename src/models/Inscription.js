import DataTypes from "sequelize";
import database from "../config/database.js";

const dataTypes = DataTypes;

const db = database;

const Inscripcion = db.define("inscripcion", {
  nombre: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: dataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: dataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: dataTypes.STRING,
  },
  empresa: {
    type: dataTypes.STRING,
  },
  cargo: {
    type: dataTypes.STRING,
  },
  mensaje: {
    type: dataTypes.STRING,
  },
  fechaInscripcion: {
    type: dataTypes.DATE,
    defaultValue: dataTypes.NOW,
  },
});

export default Inscripcion;
