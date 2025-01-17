const { Model } = require('sequelize-cockroachdb');

module.exports = (sequelize, DataTypes) => {
  const postSchema = require('./schema/post')(DataTypes);

  class Post extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  Post.init(
    postSchema,
    {
      sequelize,
      tableName: 'posts',
      modelName: 'Post',
    }
  );
  return Post;
};