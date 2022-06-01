import { test } from "tap";
import supertest from "supertest";
import build from "../start-with-mongodb/app.js";

test('GET "/" route with supertest', async (t) => {
  t.plan(1);
  const app = build();
  t.teardown(() => app.close());
  await app.ready();
  const response = await supertest(app.server)
    .get("/")
    .expect(200)
    .expect("Content-Type", "application/json; charset=utf-8");
  t.same(response.body, { message: "fastify message response with mongo" });
});
