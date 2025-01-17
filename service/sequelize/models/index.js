/* global logger */
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize-cockroachdb');
const dbConnectionMap = require('../index');
const dbNames = require('../db-names');

function loadSequelizeWithModels(dbConnectionMap) {
  const updatedDBConnectionMap = dbConnectionMap;
  const basename = path.basename(module.filename);
  for (let i = 0; i < dbNames.length; i += 1) {
    const databaseConfigName = dbNames[i];
    console.info(`${__dirname}/${databaseConfigName}`);
    fs.readdirSync(`${__dirname}/${databaseConfigName}`)
      .filter((file) => (file.indexOf('.') !== 0)
        && (file !== basename)
        && (file.slice(-3) === '.js'))
      .forEach((file) => {
        console.info(file);
        const model = require(path.join(`${__dirname}/${databaseConfigName}`, file))(updatedDBConnectionMap[databaseConfigName], Sequelize.DataTypes);
        updatedDBConnectionMap[model.name] = model;
        console.info(`loaded sequelize model ${model.name}`);
      });
  }
  Object.keys(updatedDBConnectionMap).forEach((modelName) => {
    if (updatedDBConnectionMap[modelName].associate) {
      updatedDBConnectionMap[modelName].associate(updatedDBConnectionMap);
    }
  });
  return updatedDBConnectionMap;
}
module.exports = loadSequelizeWithModels(dbConnectionMap);
