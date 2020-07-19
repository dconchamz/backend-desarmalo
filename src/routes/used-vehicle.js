const router = require('express').Router();
const { usedVehicleValidation } = require('../middlewares/validator');
const {
  usedVehicleController: { getUsedVehicles },
} = require('../controllers');

router.get('/', usedVehicleValidation, getUsedVehicles);

module.exports = router;
