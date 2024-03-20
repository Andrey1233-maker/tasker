import { FastifyReply, FastifyRequest } from "fastify";

export const authGuard = (req: FastifyRequest, res: FastifyReply, done) => {
    try {
        req.jwtVerify();
        done();
    } catch (error) {
        res.code(403).send({ message: 'Access denied' })
    }
}