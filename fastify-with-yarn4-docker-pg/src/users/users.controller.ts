import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import pool from '../app';
import { User, UserDto } from './user.dto';

const userController: FastifyPluginCallback = (
  fastify: FastifyInstance,
  options,
  done
) => {
  fastify.get('/users', async () => {
    const { rows: users } = await pool.query(`select * from users`);
    return users;
  });

  const userBlackListNames = ['some', 'bad', 'word'];

  fastify.post<{ Body: UserDto; Reply: User }>('/users', async (req, res) => {
    // Check is name exists, cuz name is required field to create new user
    if (!req.body.name) {
      res.status(500);
      return {
        error: 'Something went wrong',
      };
    }
    if (req.body.name.length > 255) {
      res.status(500);
      return {
        error: 'Something went wrong',
      };
    }
    if (userBlackListNames.includes(req.body.name)) {
      res.status(500);
      return {
        error: 'Something went wrong',
      };
    }
    return await pool.query(
      `insert into users (email, name) values ('${req.body.email}', '${req.body.name}') returning *`
    );
  });

  done();
};

export default userController;
