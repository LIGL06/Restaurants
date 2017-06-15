var express = require('express');
var Offer = require('../models/offer').Offer;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var offer = new Offer({
		restaurant: req.body.restaurant,
		discount: req.body.discount,
		type: req.body.type,
		QR: req.body.QR
	});
	restaurant.save().then(function() {
		res.send(offer);
	});
});

module.exports = router;
