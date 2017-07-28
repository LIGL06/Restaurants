var express = require('express');
var Restaurant = require('../models/restaurant').Restaurant;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurant.find({}, function(error, restaurants){
    if (error) res.render('error', {error:error});
    else res.render('dash/index', { title: 'Restaurantify - Dashboard', restaurants: restaurants});
  })
});

module.exports = router;
