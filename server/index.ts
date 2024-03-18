import Fastify from 'fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';

import { swaggerOptions, swaggerUiOptions } from './swagger-config';

const port = Number(process.env.PORT) || 3000;

const app = Fastify({
    logger: true,
});

(async () => {

    await app.register(Swagger, swaggerOptions);
    await app.register(SwaggerUI, swaggerUiOptions);

    app.listen({ port }, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log(`Server started on http://localhost:${port}`);
        console.log(`Server documentation http://localhost:${port}/api/docs`);
    })
})()