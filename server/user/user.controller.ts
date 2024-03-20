import { FastifyReply, FastifyRequest } from "fastify";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

import * as userService from "./user.service";
import { getValueFromUnknown } from "../utils/get-value";
import { CreateUserDto } from "./dto/create-user.dto";
import { HttpExeprion } from "../utils/http-exeption";
import { comparePassword } from "../utils";
import { authGuard } from "../middlewares/auth-guard";

const userRouter = async (fastify, _options, next) => {
  // get user by uuid
  fastify.get("/:uuid", async (req: FastifyRequest, res: FastifyReply) => {
    const uuid = getValueFromUnknown(req.params, "uuid");
    const user = await userService.getUserByUuid(uuid);
    res.code(200).send(user);
  });

  // get user by token
  fastify.get("/whoami", {
    preHandler: [authGuard],
  }, 
  async (req: FastifyRequest, res: FastifyReply) => {
    if (req.user) {
      res.code(200);
      return userService.getUserByUuid(getValueFromUnknown(req.user, 'uuid'));
    } else {
      res.code(403);
      return { message: 'Invalid token' };
    }
  });

  // login on system
  fastify.post("/sign-in", async (req: FastifyRequest, res: FastifyReply) => {
    const email = getValueFromUnknown(req.body, 'email');
    const password = getValueFromUnknown(req.body, 'password');

    const { dataValues: user } = await userService.getUserByEmail(email);

    if (await comparePassword(password, user.password)) {
      return { token: fastify.jwt.sign({ uuid: user.uuid })}
    }

    res.code(403);
    return {
      message: 'Wrong creds',
    }
  });

  // registration on system
  fastify.post("/sign-up", async (req: FastifyRequest, res: FastifyReply) => {
    const body = req.body;
    const dto = plainToClass(CreateUserDto, body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      throw new HttpExeprion(400, errors.toString());
    }

    const user = await userService.createUser(dto);

    res.code(201);
    return user;
  });

  // update yourself
  fastify.patch("/:uuid", async (req: FastifyRequest, res: FastifyReply) => {

  });

  next();
};

export default userRouter;
