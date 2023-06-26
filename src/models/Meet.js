import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";
import Emprendedor from "./Emprendedor.js";

class Meet extends Model {}

Meet.init(
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: false,
    },
    id_emprendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    investor: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: false,
    },
    place: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: false,
    },
  },
  {
    sequelize: db,
    modelName: "Meets",
    tableName: "meets",
  }
);

Meet.belongsTo(Emprendedor, {
  foreignKey: "id_emprendedor",
  as: "emprendedor",
  onDelete: "CASCADE",
});

export default Meet;
