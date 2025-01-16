const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const followerSchema = require('./schema/followers')(DataTypes);

  class Follower extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  Follower.init(
    followerSchema,
    {
      sequelize,
      tableName: 'followers',
      modelName: 'Follower',
    }
  );
  return Follower;
};