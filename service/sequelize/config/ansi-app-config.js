const path = require('path');

function dbConfig() {
  return {
    "username": "postgres",
    "password": "admin",
    "database": "ansi",
    "host": "localhost",
    "port": 5432,
    "dialect": "postgres",
    "pool": {
      "max": 5,
      "min": 0,
      "idle": 10000
    }
  };
  // return { 
  //   url: 'postgresql://root@localhost:26258/like-share?sslmode=disable'
  // };
}
module.exports = dbConfig();