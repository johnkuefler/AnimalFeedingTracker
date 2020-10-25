const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/', authMiddleware.ensureAuthenticated, medicineController.get_index);

router.get('/create', authMiddleware.ensureAuthenticated, medicineController.get_create);

router.post('/create', authMiddleware.ensureAuthenticated, medicineController.post_create);

router.get('/update', authMiddleware.ensureAuthenticated, medicineController.get_update);

router.post('/update', authMiddleware.ensureAuthenticated, medicineController.post_update);

router.get('/delete', authMiddleware.ensureAuthenticated, medicineController.get_delete);

module.exports = router;
