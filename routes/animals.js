const express = require('express');
const router = express.Router();
const animalControler = require('../controllers/animalController');
const authMiddleware = require('../middleware/ensureAuthenticated');

router.get('/', authMiddleware.ensureAuthenticated, animalControler.get_index);

router.get('/create', authMiddleware.ensureAuthenticated, animalControler.get_create);

router.post('/create', authMiddleware.ensureAuthenticated, animalControler.post_create);

router.get('/update', authMiddleware.ensureAuthenticated, animalControler.get_update);

router.post('/update', authMiddleware.ensureAuthenticated, animalControler.post_update);

router.get('/delete', authMiddleware.ensureAuthenticated, animalControler.get_delete);

module.exports = router;
