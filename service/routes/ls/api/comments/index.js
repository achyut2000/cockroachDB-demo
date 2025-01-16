const CommentController = require('../../../../controller/comment-controller');

class CommentsRoutes {
  static async getRoutes(fastify) {
    fastify.get('/', CommentController.list);
  }
}

module.exports = CommentsRoutes.getRoutes;