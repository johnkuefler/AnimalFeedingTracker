const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.get_index);

module.exports = router;

