import { DataTypes } from "sequelize";
import { dataSource } from "../../db/postgres";

export const userRepo = dataSource().define('users', {
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
        defaultValue: 'NoName',
    }
});

userRepo.sync();