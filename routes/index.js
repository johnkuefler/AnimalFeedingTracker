const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/ensureAuthenticated');

/* GET home page. */

router.get('/', authMiddleware.ensureAuthenticated, function(req, res, next) {
  res.render('index');
});
module.exports = router;
