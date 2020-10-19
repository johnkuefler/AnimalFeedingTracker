const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.get_index);

module.exports = router;

