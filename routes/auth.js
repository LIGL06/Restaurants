var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET home page. */
router.get('/signin', function(req, res, next) {
  res.render('auth/signin', { title: 'Restaurantify - Signin' });
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
          req.session.type = user.type
        }
         res.redirect('/');
      }
    });
  }
});

router.get('/signup', function(req, res, next){
  res.render('auth/signup', { title: 'Restaurantify - Signup' });
});

router.post('/signup', function(req, res, next){
  if(req.body.hasOwnProperty('email') && req.body.hasOwnProperty('password')){
    User.findOne({email: req.body.email}, function(error, user){
      if(error) throw error;
      if(!user) {
        const user = new User({
          fname: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: bcrypt.hashSync(req.body.password, 10)
        });
        user.save(function(error){
          if(error) throw error
          else{
            req.session.user_id = user._id
            req.session.user_username = user.username
            req.session.user_fname = user.fname
            req.session.type = user.type
            res.redirect('/');
          }
        });
      }else{
        req.session.user_id = user._id
        req.session.user_username = user.username
        req.session.user_fname = user.fname
        req.session.type = user.type
        res.redirect('/');
      }
    });
  }
});

router.get('/signout', function(req, res, next){
  req.session = null;
  res.redirect('/auth/signin');
})
module.exports = router;