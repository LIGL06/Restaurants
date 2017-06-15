var express = require('express');
var Photo = require('../models/photo').Photo;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var photo = new Photo({
		restaurant: req.body.restaurant,
		position: req.body.position
	});
	photo.save().then(function() {
		res.send(photo);
	});
});

module.exports = router;
