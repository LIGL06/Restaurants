var express = require('express'),
  QR = require('../models/qr').QR,
  admin_mid = require('../middleware/admin'),
  router = express.Router();
  router.use('/new', admin_mid);
  router.use('/all', admin_mid);
  router.use('/edit/:id', admin_mid);

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
