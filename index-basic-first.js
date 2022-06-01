import Fastify from "fastify";
const PORT = 3021;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  reply.send({ message: "value of the message" });
});

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
