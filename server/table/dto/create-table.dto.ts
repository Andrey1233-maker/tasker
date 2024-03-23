import { IsString, IsUUID } from "class-validator";

export class CreateTableDto {
  @IsString()
  name: string;

  @IsUUID()
  userUuid: string;
}
