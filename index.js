const server = require("./api/server");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`\n***Server Running on port ${port}***\n`);
});
