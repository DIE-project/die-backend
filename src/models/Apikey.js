import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";

class APIKEY extends Model {}

APIKEY.init(
  {
    value: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: db,
    modelName: "APIKEY",
    tableName: "apikeys",
  }
);

export default APIKEY;
