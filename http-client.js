const http = require("http");
const url = process.argv[2];
http.get(url, (res) => {
  res.on("error", (err) => console.error(err));
  res.setEncoding("utf8");
  res.on("data", (data) => console.log(data));
});
