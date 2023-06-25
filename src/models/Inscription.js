import DataTypes from "sequelize";
import db from "../config/database.js";

const Inscription = db.define("inscripcion", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefono: {
    type: DataTypes.STRING,
  },
  empresa: {
    type: DataTypes.STRING,
  },
  cargo: {
    type: DataTypes.STRING,
  },
  mensaje: {
    type: DataTypes.STRING,
  },
  fechaInscripcion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

export default Inscription;
