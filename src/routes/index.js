const itemRoutes = require('./item');

const apiV1 = '/v1';

module.exports = (app) => {
  app.use(`${apiV1}`, itemRoutes);
};
