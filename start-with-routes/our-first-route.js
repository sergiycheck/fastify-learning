export async function routes(fastify, options) {
  fastify.get("/", async (req, rep) => {
    return { message: "from first route" };
  });
}
