var express = require('express');
var Reward = require('../models/reward').Reward;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var reward = new Rewards({
		value: req.body.value,
		points: req.body.points,
		cumulativeMax: req.body.cumulativeMax
	});
	photo.save().then(function() {
		res.send(reward);
	});
});

module.exports = router;
