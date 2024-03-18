export const swaggerOptions = {
  swagger: {
    info: {
      title: "Tasker",
      description: "Server for tasker on fastify",
      version: "1.0.0",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};

export const swaggerUiOptions = {
  routePrefix: "/api/docs",
  exposeRoute: true,
};
