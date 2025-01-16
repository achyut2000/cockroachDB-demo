const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const attachmentSchema = require('./schema/attachment')(DataTypes);

  class Attachment extends Model {
    // static associate(models) {
    //   User.hasMany(models.Post, { foreignKey: 'userId', as: 'posts' });
    //   User.hasMany(models.Comment, { foreignKey: 'userId', as: 'comments' });
    // }
  }

  Attachment.init(
    attachmentSchema,
    {
      sequelize,
      tableName: 'attachments',
      modelName: 'Attachment',
    }
  );
  return Attachment;
};