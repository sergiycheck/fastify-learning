import { FastifyInstance, FastifyPluginCallback } from 'fastify';

const routes: FastifyPluginCallback = (
  fastify: FastifyInstance,
  options,
  done
) => {
  fastify.get('/getPosts', async (request, reply) => {});
  fastify.post('/createPost', async (request, reply) => {});
  fastify.get('/getOnePost', async (request, reply) => {
    reply.status(200).send({ title: 'test post', id: 'testId1' });
  });
  fastify.patch('/updatePost', async (request, reply) => {});
  fastify.delete('/deletePost', async (request, reply) => {});

  done();
};

export default routes;
