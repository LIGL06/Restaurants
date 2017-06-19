var express = require('express');
var Comment = require('../models/comment').Comment;
var Offer = require('../models/offer').Offer;
var Photo = require('../models/photo').Photo;
var Product = require('../models/product').Product;
var QR = require('../models/qr').QR;
var Restaurant = require('../models/restaurant').Restaurant;
var Reward = require('../models/reward').Reward;
var User = require('../models/user').User;
var router = express.Router();

/* GET users listing. */
router.get('/comments', function(req, res, next) {
  Comment.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/offers', function(req, res, next) {
  Offer.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/photos', function(req, res, next) {
  Photo.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/products', function(req, res, next) {
  Product.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/qrs', function(req, res, next) {
  QR.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/restaurants', function(req, res, next) {
  Restaurant.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/rewards', function(req, res, next) {
  Reward.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

router.get('/users', function(req, res, next) {
  User.find({}, function(error, docs){
    if(error) res.send(error);
    res.send(docs);
  });
});

module.exports = router;
