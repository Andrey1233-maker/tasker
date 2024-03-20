import { FastifyReply, FastifyRequest } from "fastify";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

import * as userService from './user.service';
import { getValueFromUnknown } from "../utils/get-value";
import { CreateUserDto } from "./dto/create-user.dto";
import { HttpExeprion } from "../utils/http-exeption";

const userRouter = async (fastify, _options, next) => {
    // get user by uuid
    fastify.get('/:uuid', async (req: FastifyRequest, res: FastifyReply) => {
        const uuid = getValueFromUnknown(req.params, 'uuid');
        const user = await userService.getUserByUuid(uuid);
        res.code(200).send(user);
    })

    // get user by token
    fastify.get('/whoami', async (req: FastifyRequest, res: FastifyReply) => {

        res.code(500).send({
            message: 'Coming soon...',
        })
    })

    // login on system
    fastify.post('/sign-in', async (req: FastifyRequest, res: FastifyReply) => {
        res.code(500).send({
            message: 'Coming soon...',
        })
    })

    // registration on system
    fastify.post('/sign-up', async (req: FastifyRequest, res: FastifyReply) => {
        console.log(req.body)

        const body = req.body;
        const dto = plainToClass(CreateUserDto, body);
        const errors = await validate(dto);

        if (errors.length > 0) { throw new HttpExeprion(400, errors.toString()); }

        const user = await userService.createUser(dto);


        res.code(201).send(user);
    })  

    // update yourself
    fastify.patch('/:uuid', async (req: FastifyRequest, res: FastifyReply) => {
        res.code(500).send({
            message: 'Coming soon...',
        })
    })

    next();
};

export default userRouter;