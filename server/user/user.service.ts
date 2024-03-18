import { HttpExeprion } from "../utils/http-exeption";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { userRepo } from "./models/user.entity"

export const getUserByUuid = (uuid: string) => userRepo.findOne({ where: { uuid }});

export const getUserByEmail = (email: string) => userRepo.findOne({ where: { email }});

export const createUser = async (dto: CreateUserDto) => {
    const userWithEmail = await getUserByEmail(dto.email);

    if(userWithEmail) {
        throw new HttpExeprion(422, 'Unprocessable Content');
    }

    return userRepo.create({...dto});
};

export const updateUser = (uuid: string, dto: UpdateUserDto) => userRepo.update(dto, { where: { uuid }});