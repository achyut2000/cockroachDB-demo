/* global logger */
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');
const cockroachDBConnection = require('../index');


function loadSequelizeWithModels(cockroachDBConnection) {
  const updatedCockroachDBConnection = cockroachDBConnection;
  const basename = path.basename(module.filename);
  const databaseConfigName = 'like-share'
  fs.readdirSync(`${__dirname}/${databaseConfigName}`)
    .filter((file) => (file.indexOf('.') !== 0)
      && (file !== basename)
      && (file.slice(-3) === '.js'))
    .forEach((file) => {
      const model = require(path.join(`${__dirname}/${databaseConfigName}`, file))(updatedCockroachDBConnection, Sequelize.DataTypes);
      updatedCockroachDBConnection[model.name] = model;
      console.info(`loaded sequelize model ${model.name}`);
    });
  Object.keys(updatedCockroachDBConnection).forEach((modelName) => {
    if (updatedCockroachDBConnection[modelName].associate) {
      updatedCockroachDBConnection[modelName].associate(updatedCockroachDBConnection);
    }
  });
  return updatedCockroachDBConnection;
}
module.exports = loadSequelizeWithModels(cockroachDBConnection);
