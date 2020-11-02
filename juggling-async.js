const http = require("http");
const urls = process.argv.slice(2);

http.get(urls[0], (res) => {
  let str = "";
  res.on("error", (err) => console.error(err));
  res.setEncoding("utf8");
  res.on("data", (data) => (str += data));
  res.on("end", () => {
    console.log(str);
    http.get(urls[1], (res) => {
      let str = "";
      res.on("error", (err) => console.error(err));
      res.setEncoding("utf8");
      res.on("data", (data) => (str += data));
      res.on("end", () => {
        console.log(str);
        http.get(urls[2], (res) => {
          let str = "";
          res.on("error", (err) => console.error(err));
          res.setEncoding("utf8");
          res.on("data", (data) => (str += data));
          res.on("end", () => {
            console.log(str);
          });
        });
      });
    });
  });
});
