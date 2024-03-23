import { FastifyReply, FastifyRequest } from "fastify";

export const authGuard = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    await req.jwtVerify();
  } catch (error) {
    res.code(403).send({ message: "Access denied" });
  }
};
