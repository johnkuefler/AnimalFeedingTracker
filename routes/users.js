const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');
const authMiddleware = require('../middleware/ensureAuthenticated');


router.get('/', authMiddleware.ensureAuthenticated, usersController.get_index);

router.get('/create', authMiddleware.ensureAuthenticated, usersController.get_create);

router.post('/create', authMiddleware.ensureAuthenticated, usersController.post_create);

router.get('/update', authMiddleware.ensureAuthenticated, usersController.get_update);

router.post('/update', authMiddleware.ensureAuthenticated, usersController.post_update);

router.get('/delete', authMiddleware.ensureAuthenticated, usersController.get_delete);

module.exports = router;

