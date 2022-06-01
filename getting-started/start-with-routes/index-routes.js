import Fastify from "fastify";
import { routes } from "./our-first-route.js";
const PORT = 3021;

const fastify = Fastify({
  logger: true,
});

fastify.register(routes);

fastify.listen(PORT, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listeting on address ${address}`);
});
