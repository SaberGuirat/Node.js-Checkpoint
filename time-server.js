const net = require("net");
function getDateTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (month.toString().length == 1) {
    month = "0" + month;
  }
  if (day.toString().length == 1) {
    day = "0" + day;
  }
  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }
  if (minute.toString().length == 1) {
    minute = "0" + minute;
  }
  let dateTime = year + "-" + month + "-" + day + " " + hour + ":" + minute;
  return dateTime;
}

const server = net.createServer((socket) => {
  socket.end(getDateTime() + "\n");
});
server.listen(+process.argv[2]);
