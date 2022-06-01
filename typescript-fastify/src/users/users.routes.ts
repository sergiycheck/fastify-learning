import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { User, UserType } from './schema/user.schema';

export const userRoutes: FastifyPluginCallback = function (
  app: FastifyInstance,
  options: any,
  done,
) {
  app.post<{ Body: UserType; Reply: UserType }>(
    '/users',
    {
      schema: {
        body: User,
        response: {
          200: User,
        },
      },
    },
    (request, reply) => {
      const { body: user } = request;
      /* user has type
       * const user: StaticProperties<{
       *  name: TString;
       *  mail: TOptional<TString>;
       * }>
       */
      //...
      reply.status(200).send(user);
    },
  );
  done();
};
