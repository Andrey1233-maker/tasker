import { IsEmail, IsString, IsStrongPassword, Length } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @Length(5, 255)
    email: string;

    @IsStrongPassword()
    password: string;

    @IsString()
    @Length(2, 100)
    name: string;
}