const express = require('express');
const router = express.Router();
const animalControler = require('../controllers/animalController');

router.get('/', animalControler.get_index);

router.get('/create', animalControler.get_create);

router.post('/create', animalControler.post_create);

router.get('/update', animalControler.get_update);

router.post('/update', animalControler.post_update);

router.get('/delete', animalControler.get_delete);

module.exports = router;
