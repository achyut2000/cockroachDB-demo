const PostController = require('../../../../controller/post-controller');

class PostRoutes {
  static async getRoutes(fastify) {
    fastify.get('/', PostController.list);
  }
}

module.exports = PostRoutes.getRoutes;