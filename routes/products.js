var express = require('express');
var Product = require('../models/product').Product;
var router = express.Router();

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
