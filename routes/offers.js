var express = require('express'),
  Restaurant = require('../models/restaurant').Restaurant,
  Offer = require('../models/offer').Offer,
  QR = require('../models/qr').QR,
  admin_mid = require('../middleware/admin'),
  router = express.Router();
  router.use('/new', admin_mid);
  router.use('/all', admin_mid);
  router.use('/edit/:id', admin_mid);

/* PÖST users listing. */
router.post('/', function(req, res, next) {
	var offer = new Offer({
		name: req.body.name,
		user: req.session.user_id,
		restaurant: req.body.restaurant,
		discount: req.body.discount,
		type: req.body.type,
	});
	var qr = new QR({
		text: offer.name,
		type: 'Descuento',
		url: offer._id
	});
		offer.QR = qr._id;
	offer.save(function(error){
		if (error) throw error;
		else {
			qr.save(function(errorqr){
				if (errorqr) throw errorqr;
				else res.redirect('/offers/all');
			})
		}
	})

});

router.get('/new', function(req, res, next){
	Restaurant.find({createdBy:req.session.user_id},'_id name', function(error, restaurants){
	if (error) throw error;
	// res.send(restaurants);
	else res.render('offers/new', { title: 'Restaurantify - Nueva oferta', restaurants:restaurants})
	})
});

router.get('/all', function(req, res, next){
	Offer.find({user:req.session.user_id}).exec(function(error,offers){
		res.render('offers/list', { title: 'Mis ofertas', offers:offers});
	});
});

router.get('/:id', function(req, res, next) {
	Offer.findOne({_id:req.params.id}, function(error, offer){
		if (error) throw error;
		else res.send(offer);
	})
});

module.exports = router;
