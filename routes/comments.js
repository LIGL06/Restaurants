var express = require('express');
var Comment = require('../models/comment').Comment;
var Restaurant = require('../models/restaurant').Restaurant;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Hola');
});

router.post('/', function(req, res, next) {
	comment = new Comment({
		user: req.body.user,
		restaurant: req.body.restaurant,
		text: req.body.text
	});
	Restaurant.findOneAndUpdate({_id:req.body.restaurant},{ $set:{comments:comment._id} },{ new: true }, function(error, restaurant){
		if (error) throw error;
		else {
			comment.save(function(error){
			if (error) throw error;
			res.redirect('/')
			})
		}
	});
});

module.exports = router;
