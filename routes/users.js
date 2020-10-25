const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/', authMiddleware.ensureAuthenticated, usersController.get_index);

module.exports = router;

