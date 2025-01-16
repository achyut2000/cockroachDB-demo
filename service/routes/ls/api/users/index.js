const UserController = require('../../../../controller/user-controller');

class UserRoutes {
  static async getRoutes(fastify) {
    fastify.get('/', UserController.list);
    fastify.get('/:id', UserController.get);
    fastify.post('/', UserController.create);
  }
}

module.exports = UserRoutes.getRoutes;