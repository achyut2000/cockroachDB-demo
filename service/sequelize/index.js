const Sequelize = require('sequelize-cockroachdb');
const cls = require('cls-hooked');

const dbConfig = require('./config');
const defaultDefines = {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

function postgresInitialization() {
  dbConfig.define = defaultDefines;
  const namespace = cls.createNamespace('like-share');
    Sequelize.useCLS(namespace);
    dbConfig.logging = msg => console.info(msg);
    return new Sequelize(dbConfig);
}

module.exports = postgresInitialization();