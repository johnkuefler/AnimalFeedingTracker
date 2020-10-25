const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/ensureAuthenticated');


router.get('/', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('settings/index');
});

module.exports = router;
