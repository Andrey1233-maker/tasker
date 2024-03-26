import { FastifyReply, FastifyRequest } from "fastify";
import { plainToClass } from "class-transformer";

import { authGuard } from "../middlewares/auth-guard";
import { HttpExeprion, getValueFromUnknown } from "../utils";
import { CreateColumnDto } from "./dto/create-column";
import * as tableService from '../table/table.service';
import * as columnService from './column.service';

export const columnRouter = async (fastify, _options, next) => {
    fastify.post('/', { preHandler: [authGuard] }, async (req: FastifyRequest, res: FastifyReply) => {
        const userUuid = getValueFromUnknown(req.user, "uuid");
        const body = typeof req.body === "object" ? req.body : {};

        const dto = plainToClass(CreateColumnDto, body);
        const table = await tableService.getTableByUuid(dto.tableUuid, userUuid);

        if (!table) {
            throw new HttpExeprion(400, 'Table not found');
        }

        return columnService.createColumn(dto);
    })

    next();
}