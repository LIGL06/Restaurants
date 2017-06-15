var express = require('express');
var Restaurant = require('../models/restaurant').Restaurant;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next){
  var restaurant = new Restaurant({
    name: 'Krusty Krab',
  	score: 5,
  	address: 'Bikini Bottom',
  	visits: 9999999,
  	type: 'Seafood'
  });
  restaurant.save().then(function(){
    res.send(restaurant);
  });
});

module.exports = router;
