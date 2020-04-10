var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("product");
});

/* ADD users listing. */
router.get('/add', function(req, res, next) {
  res.send('add product');
});

/* GET users listing. */
router.get('/edit', function(req, res, next) {
  res.send('edit product');
});

/* GET users listing. */
router.get('/del', function(req, res, next) {
  res.send('del product');
});



module.exports = router;
