const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 50541 // PORT number here
  });

  return conn;
};

module.exports = connect;