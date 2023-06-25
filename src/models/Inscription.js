import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";

class Inscription extends Model {}

Inscription.init(
  {
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
  },
  {
    sequelize: db,
    modelName: "Inscription",
    tableName: "inscripciones",
  }
);

export default Inscription;
