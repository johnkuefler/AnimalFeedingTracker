const express = require('express');
const router = express.Router();
const medicineController = require('../controllers/medicineController');

router.get('/', medicineController.get_index);

router.get('/create', medicineController.get_create);

router.post('/create', medicineController.post_create);

router.get('/update', medicineController.get_update);

router.post('/update', medicineController.post_update);

router.get('/delete', medicineController.get_delete);

module.exports = router;
