import fastify, { FastifyLoggerInstance, FastifyServerOptions } from 'fastify';
import { Server } from 'http';
import { customRoutes } from './custom.routes';
import { userRoutes } from './users/users.routes';

export default function build(opts: FastifyServerOptions<Server, FastifyLoggerInstance> = {}) {
  const app = fastify(opts);
  app.register(customRoutes);
  app.register(userRoutes);
  return app;
}
