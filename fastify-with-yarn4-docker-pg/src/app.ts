import { Pool, PoolConfig } from 'pg';

const config: PoolConfig = {
  user: process.env.PG_USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT),
};

console.log('config', config);

const pool = new Pool({
  ...config,
});

export default pool;
