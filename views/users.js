var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond to get');
});

router.post('/', function (req, res, next){
  res.send('respond to post')
});

module.exports = router;
