import fastify from 'fastify';
import app from './app';

const PORT = 3050;

const server = app({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});

server.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
