var express = require('express');
var QR = require('../models/qr').QR;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
	var qr = new QRS({
		text: req.body.text,
		type: req.body.type,
		url: req.body.url
	});
	photo.save().then(function() {
		res.send(qr);
	});
});

module.exports = router;
