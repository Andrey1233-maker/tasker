import { DataTypes } from "sequelize";
import { dataSource } from "../../db/postgres";
import { tableRepo } from "../../table/model/table.entity";

export type TUser = {
  uuid: string;
  email: string;
  password: string;
  name: string;
};

export const userRepo = dataSource().define("users", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "NoName",
  },
});

userRepo.sync();
