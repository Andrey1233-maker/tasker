import { IsString, IsUUID } from "class-validator";

export class CreateColumnDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsUUID()
    tableUuid: string;
}