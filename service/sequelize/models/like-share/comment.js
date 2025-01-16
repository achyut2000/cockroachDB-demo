const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const commentSchema = require('./schema/comment')(DataTypes);

  class Comment extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  Comment.init(
    commentSchema,
    {
      sequelize,
      tableName: 'comments',
      modelName: 'Comment',
    }
  );
  return Comment;
};