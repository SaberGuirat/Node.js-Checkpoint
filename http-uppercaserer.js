const http = require("http");
const map = require("through2-map");
const portNumber = +process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    return res.end("NO POST method Exist");
  }
  req
    .pipe(
      map((chunk) => {
        return chunk.toString().toUpperCase();
      })
    )
    .pipe(res);
});

server.listen(portNumber);
