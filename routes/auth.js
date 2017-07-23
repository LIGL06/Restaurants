var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.render('layout', { title: 'Restaurantify - Signin' });
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
        res.render('layout', { title: 'Restaurantify - Dashboard' });
      }
    });
  }
});

router.get('/signup', function(req, res, next){
  res.render('layout', { title: 'Restaurantify - Signup' });
});

module.exports = router;