import Fastify from "fastify";
const PORT = 3021;

const fastify = Fastify({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send({ message: "value of the message" });
});

fastify.listen(PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listeting on address ${address}`);
});
