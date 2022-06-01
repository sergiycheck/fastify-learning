import fastify from "fastify";
import dbConnector from "./our-db-connector.js";
import firstRoute from "./our-first-route.js";

export default function build(opts = {}) {
  const app = fastify(opts);
  app.register(dbConnector);
  app.register(firstRoute);
  return app;
}
