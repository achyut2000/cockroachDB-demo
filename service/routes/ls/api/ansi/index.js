const AnsiController = require('../../../../controller/ansi-controller');

class AnsiRoutes {
  static async getRoutes(fastify) {
    fastify.get('/', AnsiController.list);
    fastify.post('/', AnsiController.create);
  }
}

module.exports = AnsiRoutes.getRoutes;