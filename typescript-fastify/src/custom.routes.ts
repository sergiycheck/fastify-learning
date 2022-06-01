import fastify, { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { Server } from 'http';

interface IQuerystring {
  username: string;
  password: string;
}

interface IHeaders {
  'h-Custom': string;
}

export const customRoutes: FastifyPluginCallback<{
  option1: string;
  option2: boolean;
}> = function (server: FastifyInstance, opts, done) {
  server.get('/ping', async (request, reply) => {
    return 'pong\n';
  });

  server.get<{
    Querystring: IQuerystring;
    Headers: IHeaders;
  }>(
    '/auth',
    {
      preValidation: (req, repl, done) => {
        const { username, password } = req.query;

        done(username !== 'admin' ? new Error('user must be amin') : undefined);
      },
    },
    async (request, reply) => {
      const customerHeader = request.headers['h-Custom'];
      // do something with request data
      return `logged in!`;
    },
  );

  done();
};
