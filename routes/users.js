var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  User.findOne({_id:req.params.id},'fname username').exec(function(error, user){
    if (error) res.render('error', {error:error});
    else res.send(user);
  })
});


module.exports = router;
