const { Model } = require('sequelize-cockroachdb');

module.exports = (sequelize, DataTypes) => {
  const userSchema = require('./schema/user')(DataTypes);

  class User extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  User.init(
    userSchema,
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  );
  return User;
};