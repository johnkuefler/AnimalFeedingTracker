const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/', foodController.get_index);

router.get('/create', foodController.get_create);

router.post('/create', foodController.post_create);

router.get('/update', foodController.get_update);

router.post('/update', foodController.post_update);

router.get('/delete', foodController.get_delete);

module.exports = router;
