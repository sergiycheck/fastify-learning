export default async function routes(fastify, options) {
  const collection = fastify.mongo.db.collection("test_collection");

  const opts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            message: { type: "string" },
          },
        },
      },
    },
  };

  fastify.get("/", opts, async (request, reply) => {
    return { message: "fastify message response with mongo" };
  });

  fastify.get("/animals", async (request, reply) => {
    const result = await collection.find().toArray();
    if (!result.length) throw new Error("No docs found");
    return result;
  });

  fastify.get("/animals/:animal", async (request, reply) => {
    const animal = request.params.animal;
    console.log("animal", animal);
    const result = await collection.findOne({ animal });
    if (!result) throw new Error("Invalid value");
    return result;
  });

  const animalBodyJsonSchema = {
    type: "object",
    required: ["animal"],
    properties: {
      animal: { type: "string" },
    },
  };

  const schema = {
    body: animalBodyJsonSchema,
  };

  fastify.post("/animals", { schema }, async (request, reply) => {
    const animal = request.body.animal;
    const result = await collection.insertOne({ animal });
    return result;
  });
}
