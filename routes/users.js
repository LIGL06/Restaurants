var bcrypt = require('bcryptjs');
var express = require('express');
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/:username', function(req, res, next) {
  res.render('layout', { title: `Platzigram - ${req.params.username}` });  
});

router.get('/:username/:id', function(req, res, next) {
  res.render('layout', { title: `Platzigram - ${req.params.username}` });  
});

module.exports = router;
