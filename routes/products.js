var express = require('express'),
  Product = require('../models/product').Product,
  admin_mid = require('../middleware/admin'),
  router = express.Router();
  router.use('/new', admin_mid);
  router.use('/all', admin_mid);
  router.use('/edit/:id', admin_mid);


/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var products = new Products({
		price: req.body.price
	});
	photo.save().then(function() {
		res.send(product);
	});
});

module.exports = router;
