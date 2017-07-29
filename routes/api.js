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

router.get('/pictures', function(req, res, next){
var pictures = [
      {
        user: {
        username: 'ligl007',
        avatar: 'https://res.cloudinary.com/uv-marketing/image/upload/v1500773490/ligl007_procfile.jpg'
        },
      url: 'https://res.cloudinary.com/uv-marketing/image/upload/v1500773833/ligl007_picture.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
      }
  ];
  setTimeout(function(){
      res.send(pictures)
  },2000)
});

router.get('/user/:username', function(req, res, next){
  const user = {
    username: 'platzi',
    avatar: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/11351571_102153813463801_2062911600_a.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
        likes: 3
      },
      {
        id: 2,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
        likes: 1
      },
      {
        id: 3,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
        likes: 10
      },
      {
        id: 4,
        src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
        likes: 0
      },
      {
        id: 5,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
        likes: 23
      },
      {
        id: 6,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
        likes: 11
      }
    ]
  }
  res.send(user);
})

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
    setTimeout(function(){
      res.send(docs)
  },2000)
  });
});

router.get('/restaurants/:id', function(req, res, next){
  Restaurant.findOne({_id:req.params.id}, function(error, restaurant){
    if (error) res.render('error', {error:error});
    else res.send(restaurant);
  })
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
