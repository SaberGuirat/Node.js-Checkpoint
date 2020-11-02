const fs = require("fs");
const path = require("path");

module.exports = (dir, ext, callback) => {
  fs.readdir(dir, (err, list) => {
    if (err) return callback(err);
    const filtredList = list.filter((file) => path.extname(file) === `.${ext}`);
    return callback(null, filtredList);
  });
};
