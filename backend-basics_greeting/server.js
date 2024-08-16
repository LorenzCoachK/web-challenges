import { createServer } from "node:http";

// export const server = …

// my code starts here

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hi Lorenz");
});
