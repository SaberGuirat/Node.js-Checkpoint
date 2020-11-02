const http = require("http");
const url = process.argv[2];

http.get(url, (res) => {
  let str = "";
  res.on("error", (err) => console.error(err));
  res.setEncoding("utf8");
  res.on("data", (data) => (str += data));
  res.on("end", () => {
    console.log(str.length);
    console.log(str);
  });
});
