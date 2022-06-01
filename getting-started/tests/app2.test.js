import build from '../start-with-mongodb/app.js';
import { test } from 'tap';

test('GET "/" route ', (t) => {
  t.plan(4);

  const app = build();

  //at the end of your tests it is highly recommended to call `.close()`
  // to ensure that all connections to external services get closed.
  t.teardown(() => app.close());

  app.inject(
    {
      method: 'GET',
      url: '/',
    },
    (err, response) => {
      t.error(err);
      t.equal(response.statusCode, 200);
      t.equal(response.headers[('content-type', 'application/json; charset=utf-8')]);
      t.same(response.json(), { message: 'fastify message response with mongo' });
    },
  );
});
