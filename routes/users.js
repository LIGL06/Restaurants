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
    email: req.body.email,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 10)
  });
  user.save().then(function(){
    res.send(user);
  });
});

router.post('/signin', function(req, res, next){
  if(req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
    User.findOne({username: req.body.username}, function(error, user){
      if(error) throw error;
      if(!user) res.redirect('/auth/signup');
      else{
        if(bcrypt.compareSync(req.body.password, user.password)){
          req.session.user_id = user._id
          req.session.user_username = user.username
          req.session.user_fname = user.fname
        }
        res.redirect('/');
      }
    });
  }
});

module.exports = router;
