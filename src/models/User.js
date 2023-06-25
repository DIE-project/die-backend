import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,
    },
    role: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: false,
    },
  },
  {
    sequelize: db,
    modelName: "User",
    tableName: "users",
  }
);

export default User;
