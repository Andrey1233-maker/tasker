import { DataTypes } from "sequelize";
import { dataSource } from "../../db/postgres";
import { columnRepo } from "../../column/models/column.entity";


export const taskRepo = dataSource().define("tables", {
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
  columnUuid: {
    type: DataTypes.UUID,
    references: {
      model: columnRepo,
      key: "uuid",
    },
  },
});

taskRepo.belongsTo(columnRepo);
columnRepo.hasMany(taskRepo);
columnRepo.sync();
