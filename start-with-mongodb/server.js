import app from "./app.js";
const PORT = 3021;

//TODO: fastify-cli not working

const server = app({
  logger: {
    level: "info",
    prettyPrint: true,
  },
});

server.listen(PORT, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
