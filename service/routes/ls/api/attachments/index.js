const AttachmentController = require('../../../../controller/attachment-controller');

class AttachmentRoutes {
  static async getRoutes(fastify) {
    fastify.get('/', AttachmentController.list);
  }
}

module.exports = AttachmentRoutes.getRoutes;