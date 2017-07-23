var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Restaurantify - Dashboard' , session:req.session});
});

module.exports = router;
