import build from "../start-with-mongodb/app.js";
import { test } from "tap";

//https://node-tap.org/

//https://github.com/fastify/light-my-request

test('requests the "/" route ', (t) => {
  t.plan(2);

  const app = build();
  t.teardown(() => app.close());

  app.inject(
    {
      method: "GET",
      url: "/",
    },
    (err, response) => {
      t.error(err);
      t.equal(response.statusCode, 200, "returns a status code of 200");
    }
  );
});
