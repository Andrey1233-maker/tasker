import Fastify from 'fastify';

const port = Number(process.env.PORT) || 3000;

const app = Fastify({
    logger: true,
});

(async () => {

    app.listen({ port }, (err, address) => {
        if (err) {
            console.log(err.message);
            return;
        }

        console.log(`Server started on ${address}`);
    })
})()