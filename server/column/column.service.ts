import { CreateColumnDto } from "./dto/create-column";
import { columnRepo } from "./models/column.entity";

export const createColumn = (dto: CreateColumnDto) => {
  return columnRepo.create({ ...dto });
};
