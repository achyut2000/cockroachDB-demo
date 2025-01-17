const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ansiSchema = require('./schema/ansi')(DataTypes);

  class Ansi extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  Ansi.init(
    ansiSchema,
    {
      sequelize,
      tableName: 'ansi',
      modelName: 'Ansi',
    }
  );
  return Ansi;
};