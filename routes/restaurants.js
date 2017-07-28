var express = require('express');
var Restaurant = require('../models/restaurant').Restaurant;
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	var restaurant = new Restaurant({
		name: req.body.name,
		address: req.body.address,
		createdBy: req.session.user_id
	});
	if(req.body.hasOwnProperty('name') && req.body.hasOwnProperty('address')){
    Restaurant.findOne({name: req.body.name}, function(error, doc){
      if(error) res.render('error', {error:error});
      if(!doc) {
        var restaurant = new Restaurant({
			name: req.body.name,
			address: req.body.address,
			createdBy: req.session.user_id
		});
        restaurant.save(function(error){
          if(error) res.render('error', {error:error});
          else{
            res.redirect('/dash');
          }
        });
      }else{
        res.redirect('/restaurant/new');
      }
    });
  }
});

router.get('/new', function(req, res, next){
	res.render('restaurants/new', {title: 'Restaurantify - New'});
});
module.exports = router;
