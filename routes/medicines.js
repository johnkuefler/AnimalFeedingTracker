const express = require('express');
const router = express.Router();
const medicinesController = require('../controllers/medicineController');

router.get('/', medicinesController.get_index);

module.exports = router;

