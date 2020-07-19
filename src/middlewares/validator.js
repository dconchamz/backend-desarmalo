const { query } = require('express-validator');

const usedVehicleValidation = [
  query('pk_i_id').not().isEmpty().withMessage('The param pk_i_id is required'),
];
module.exports = {
  usedVehicleValidation,
};
