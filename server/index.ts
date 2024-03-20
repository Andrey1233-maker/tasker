import Fastify from "fastify";
import Swagger from "@fastify/swagger";
import SwaggerUI from "@fastify/swagger-ui";
require("dotenv").config();

import { swaggerOptions, swaggerUiOptions } from "./swagger-config";
import { connect } from "./db/postgres";
import userRouter from "./user/user.controller";
import { errorHandler } from "./middlewares";

// app config
const port = Number(process.env.PORT) || 3000;

const app = Fastify({
  logger: true,
});

// bootstrap
(async () => {
  // app.register(require('@fastify/formbody'))
  await app.register(Swagger, swaggerOptions);
  await app.register(SwaggerUI, swaggerUiOptions);

  app.setErrorHandler(errorHandler);

  await app.register(userRouter, { prefix: '/user' });

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
