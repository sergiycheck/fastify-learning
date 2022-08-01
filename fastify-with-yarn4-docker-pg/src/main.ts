import dotenv from 'dotenv';
dotenv.config();

import fastify from 'fastify';
import pool from './app';
import customPostsRoutes from './routes/postRoute';

const start = async () => {
  try {
    const server = fastify({ logger: true });

    await pool.connect();
    server.register(customPostsRoutes);
    await server.listen(3000);
  } catch (err) {
    console.log('ERROR. URGENT!');
    console.error(err);
    process.exit(1);
  }
};

start();
