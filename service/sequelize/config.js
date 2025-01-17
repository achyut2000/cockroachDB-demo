const path = require('path');
const dbNames = require('./db-names');
function dbConfig() {
  return {
    [dbNames[0]]: {
    dialect: "postgres",
    host: "127.0.0.1",
    port: 26257,
    username: 'root',
    database: 'like-share',
    password: '',
    logging: console.log,
    },
    [dbNames[1]]: {
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: 'postgres',
      database: 'ansi',
      password: 'admin',
      logging: console.log,
    }
  };
  // return { 
  //   url: 'postgresql://root@localhost:26258/like-share?sslmode=disable'
  // };
}
module.exports = dbConfig;
