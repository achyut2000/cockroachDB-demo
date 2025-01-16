const Fastify = require('fastify');
const fastifyFormBody = require('@fastify/formbody');
const cors = require('@fastify/cors');
const AutoLoad = require('@fastify/autoload');
const path = require('path');

class LikeShareApp {
  static async getFastifyInstance(fastify) {
    try {
      const app = Fastify({ disableRequestLogging: true });
      app.register(fastifyFormBody);
      app.register(AutoLoad, {
        dir: path.join(__dirname, 'routes'),
      });
      LikeShareApp.listenOnPort(app);
      return app;
    } catch (error) {
      console.log(error);
    }
  }

  static listenOnPort(app) {
    const servicePort = 65001;
    app.listen(servicePort, '0.0.0.0', async (err, address) => {
      if (err) {
        console.log(err.stack);
        process.exit(1);
      } else {
        console.info(`API Service  is started at ${servicePort}`);
      }
    });
  }
}
module.exports = LikeShareApp.getFastifyInstance();