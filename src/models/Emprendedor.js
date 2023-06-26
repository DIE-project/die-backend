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
    descripcion: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: false,
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    celular: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    direccion: {
      type: DataTypes.STRING(),
      allowNull: true,
      unique: false,
    },
    web: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    redes: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    imagen: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: false,
    },
    destacado: {
      type: DataTypes.BOOLEAN,
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
