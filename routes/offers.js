var express = require('express');
var Offer = require('../models/offer').Offer;
var QR = require('../models/qr').QR;
var Restaurant = require('../models/restaurant').Restaurant;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var offer = new Offer({
		name: req.body.name,
		restaurant: req.body.restaurant,
		discount: req.body.discount,
		type: req.body.type,
	});
	var qr = new QR({
		text: offer.name,
		type: 'Descuento',
	});
		offer.QR = qr._id;
	res.send(offer);
});

router.get('/new', function(req, res, next){
	Restaurant.find({createdBy:req.session.user_id},'_id name', function(error, restaurants){
	if (error) throw error;
	// res.send(restaurants);
	else res.render('offers/new', { title: 'Restaurantify - Nueva oferta', restaurants:restaurants})
	})
});

module.exports = router;
