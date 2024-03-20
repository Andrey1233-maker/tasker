import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export const errorHandler = (
  error: FastifyError,
  req: FastifyRequest,
  res: FastifyReply,
) => {
  res.code(error.statusCode ?? 500).send({
    method: req.method,
    address: req.url,
    date: new Date().toLocaleString(),
    code: error.statusCode ?? 500,
    message: error.message,
  });
};
