const { User } = require('../sequelize/models');

class UserController {
  static async list(request, response) {
    const users = await User.findAll();
    response.code(200).send(users);
  }

  static async create(request, response) {
    const user = await User.create({ ...request.body, created_at: new Date(), updated_at: new Date() });
    response.code(201).send(user);
  }

  static async get(request, response) {
    const user = await User.findByPk(request.params.id);
    response.code(200).send(user);
  }
}

module.exports = UserController;