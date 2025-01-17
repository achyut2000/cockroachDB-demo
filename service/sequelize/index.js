const Sequelize = require('sequelize-cockroachdb');
const cls = require('cls-hooked');

const dbConfig = require('./config');

const defaultDefines = {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
};

function postgresInitialization() {
  const dbMap = {};
  const dbConfigObj = dbConfig();
  const databases = Object.keys(dbConfigObj);
  for (let i = 0; i < databases.length; ++i) {
    const database = databases[i];
    const postgresConf = dbConfigObj[database];
    postgresConf.define = defaultDefines;
    if (process.env.NODE_ENV === 'development') postgresConf.logQueryParameters = true;
    const namespace = cls.createNamespace('like-share');;
    Sequelize.useCLS(namespace);
    postgresConf.logging = (msg) => console.info(msg);
    dbMap[database] = new Sequelize(
      postgresConf
    );
  }
  return dbMap;
}

module.exports = postgresInitialization();