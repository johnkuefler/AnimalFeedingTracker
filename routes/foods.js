const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/', authMiddleware.ensureAuthenticated, foodController.get_index);

router.get('/create', authMiddleware.ensureAuthenticated, foodController.get_create);

router.post('/create', authMiddleware.ensureAuthenticated, foodController.post_create);

router.get('/update', authMiddleware.ensureAuthenticated, foodController.get_update);

router.post('/update', authMiddleware.ensureAuthenticated, foodController.post_update);

router.get('/delete', authMiddleware.ensureAuthenticated, foodController.get_delete);

module.exports = router;
