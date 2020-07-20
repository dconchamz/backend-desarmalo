const router = require('express').Router();
const { itemleValidation } = require('../middlewares/validator');
const {
  itemController: { getItemById },
} = require('../controllers');

router.get('/item', itemleValidation, getItemById);

module.exports = router;
