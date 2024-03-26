import { DataTypes } from "sequelize";
import { dataSource } from "../../db/postgres";
import { tableRepo } from "../../table/model/table.entity";

export const columnRepo = dataSource().define("tables", {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Untitled",
  },
  tableUuid: {
    type: DataTypes.UUID,
    references: {
      model: tableRepo,
      key: "uuid",
    },
  },
});

columnRepo.belongsTo(tableRepo);
tableRepo.hasMany(columnRepo);
columnRepo.sync();
