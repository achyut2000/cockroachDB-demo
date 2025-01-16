const path = require('path');

function dbConfig() {
  return {
    dialect: "postgres",
    host: "127.0.0.1",
    port: 26257,
    username: 'root',
    database: 'like-share',
    password: '',
    logging: console.log,
  };
  // return { 
  //   url: 'postgresql://root@localhost:26258/like-share?sslmode=disable'
  // };
}
module.exports = dbConfig();
