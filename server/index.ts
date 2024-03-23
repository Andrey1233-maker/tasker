import Fastify from "fastify";
import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
import JWT from "@fastify/jwt";
import cors from "@fastify/cors";
require("dotenv").config();

import { swaggerOptions, swaggerUiOptions } from "./swagger-config";
import { connect } from "./db/postgres";
import userRouter from "./user/user.controller";
import { errorHandler } from "./middlewares";
import tableRouter from "./table/table.controller";

// app config
const port = Number(process.env.PORT) || 3000;

const app = Fastify({
  logger: true,
});

// bootstrap
(async () => {
  await app.register(cors, {
    origin: "*",
  });
  app.register(JWT, {
    secret: process.env.JWT_SECRET,
  });

  await app.register(Swagger, swaggerOptions);
  await app.register(SwaggerUI, swaggerUiOptions);

  app.setErrorHandler(errorHandler);

  await app.register(userRouter, { prefix: "/user" });
  await app.register(tableRouter, { prefix: "/table" });

  await connect();

  app.listen({ port }, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }

    console.log(`Server started on http://localhost:${port}`);
    console.log(`Server documentation http://localhost:${port}/api/docs`);
  });
})();
