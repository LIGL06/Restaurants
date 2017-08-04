var express = require('express'),
  Restaurant = require('../models/restaurant').Restaurant,
  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Restaurant.find().populate('createdBy', 'username').populate({ path: 'comments', select: 'text restaurant user', populate: { path : 'user', select: 'username'}}).exec(function(error, restaurants){
    if (error) res.render('error', {error:error});
    // res.send(restaurants);
    else res.render('dash/index', { title: 'Restaurantify - Dashboard', restaurants: restaurants});
  });
});


module.exports = router;
