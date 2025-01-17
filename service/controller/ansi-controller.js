const { Ansi } = require('../sequelize/models');

class AttachmentController {

  static async list(request, response) {
    const ansi = await Ansi.findAll();
    response.send(ansi);
  }

  static async create(request, response) {
    const ansi = await Ansi.create(request.body);
    response.send(ansi);
  }
}

module.exports = AttachmentController;