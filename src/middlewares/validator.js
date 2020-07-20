const { query } = require('express-validator');

const itemleValidation = [
  query('pk_i_id').not().isEmpty().withMessage('The param pk_i_id is required'),
];
module.exports = {
  itemleValidation,
};
