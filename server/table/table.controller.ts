import { FastifyReply, FastifyRequest } from "fastify";

import { authGuard } from "../middlewares/auth-guard";
import * as tableService from "./table.service";
import { getValueFromUnknown } from "../utils";
import { plainToClass } from "class-transformer";
import { CreateTableDto } from "./dto/create-table.dto";

const tableRouter = async (fastify, _options, next) => {
  fastify.get(
    "/",
    { preHandler: [authGuard] },
    (req: FastifyRequest, res: FastifyReply) => {
      const userUuid = getValueFromUnknown(req.user, "uuid");
      return tableService.getTables(userUuid);
    },
  );

  fastify.get(
    "/:uuid",
    { preHandler: [authGuard] },
    (req: FastifyRequest, res: FastifyReply) => {
      const userUuid = getValueFromUnknown(req.user, "uuid");
      const uuid = getValueFromUnknown(req.params, "uuid");

      return tableService.getTableByUuid(uuid, userUuid);
    },
  );

  fastify.post(
    "/",
    { preHandler: [authGuard] },
    (req: FastifyRequest, res: FastifyReply) => {
      const userUuid = getValueFromUnknown(req.user, "uuid");
      const body = typeof req.body === "object" ? req.body : {};
      const dto = plainToClass(CreateTableDto, { ...body, userUuid });

      return tableService.createTable(dto);
    },
  );

  fastify.patch(
    "/:uuid",
    { preHandler: [authGuard] },
    (req: FastifyRequest, res: FastifyReply) => {
      const userUuid = getValueFromUnknown(req.user, "uuid");

      return [];
    },
  );

  fastify.delete(
    "/:uuid",
    { preHandler: [authGuard] },
    (req: FastifyRequest, res: FastifyReply) => {
      const userUuid = getValueFromUnknown(req.user, "uuid");

      return [];
    },
  );

  next();
};

export default tableRouter;
