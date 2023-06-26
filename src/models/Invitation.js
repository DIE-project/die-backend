import { DataTypes, Model } from "sequelize";
import db from "../config/database.js";

class Invitation extends Model {}

Invitation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    organization: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    information: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "invitation",
    timestamps: false,
  }
);

export default Invitation;
