import { DataTypes } from "sequelize";
import { dataSource } from "../../db/postgres";
import { userRepo } from "../../user/models/user.entity";

export type TTable = {};

export const tableRepo = dataSource().define("tables", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Untitled",
  },
  userUuid: {
    type: DataTypes.UUID,
    references: {
      model: userRepo,
      key: "uuid",
    },
  },
});

tableRepo.belongsTo(userRepo);
userRepo.hasMany(tableRepo);
tableRepo.sync();
