var express = require('express'),
  Restaurant = require('../models/restaurant').Restaurant,
  Photo = require('../models/photo').Photo,
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurant.find().populate({ path:'createdBy', select: 'username'}).exec(function(error, restaurants){
    if (error) res.render('error', {error:error});
    // res.send(restaurants);
    else res.render('dash/index', { title: 'Restaurantify - Dashboard', restaurants: restaurants});
  });
});

module.exports = router;
