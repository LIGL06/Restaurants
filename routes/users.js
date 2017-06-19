var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', function (req, res, next){
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    sex: req.body.sex,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  user.save().then(function(){
    res.send(user);
  });
});

router.post('/signin', function(req, res, next){

});

module.exports = router;
