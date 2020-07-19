const VehicleRoutes = require('./used-vehicle');

const apiV1 = '/v1';

module.exports = (app) => {
  app.use(`${apiV1}/used-vehicle`, VehicleRoutes);
};
