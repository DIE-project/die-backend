import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";

class Emprendedor extends Model {}

Emprendedor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize: db,
    modelName: "Emprendedores",
    tableName: "emprendedores",
  }
);

export default Emprendedor;
