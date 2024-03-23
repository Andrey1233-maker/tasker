import { userRepo } from "../user/models/user.entity";
import { CreateTableDto } from "./dto/create-table.dto";
import { tableRepo } from "./model/table.entity";

export const getTableByUuid = async (uuid: string, userUuid: string) => {
  const table = await tableRepo.findOne({
    where: {
      uuid,
      userUuid,
    },
    include: [{ model: userRepo, as: "user" }],
  });

  return table;
};

export const getTables = async (userUuid: string) => {
  const tables = await tableRepo.findAll({
    where: {
      userUuid,
    },
    include: [{ model: userRepo, as: "user" }],
  });
  return tables;
};

export const createTable = (dto: CreateTableDto) => {
  return tableRepo.create({ ...dto });
};
