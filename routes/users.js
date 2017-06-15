var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next){
  var user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    sex: req.body.sex,
    email: req.body.email,
    password: req.body.password
  });
  user.save().then(function(){
    res.send(user);
  });
});

module.exports = router;
