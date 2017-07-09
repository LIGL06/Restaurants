var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('auth/login', { title: 'Restaurantify' });
});

router.post('/login', function(req, res, next){
  if(req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')){
    User.findOne({email: req.body.email}, function(error, user){
      if(error) throw error;
      if(!user) res.redirect('/auth/logup');
      else{
        if(bcrypt.compareSync(req.body.password, user.password)){
          req.session.user_id = user._id
          req.session.user_email = user.email
          req.session.user_fname = user.fname
        }
      }
    });
  }
});

router.get('/logup', function(req, res, next){
  res.render('auth/logup');
});

module.exports = router;