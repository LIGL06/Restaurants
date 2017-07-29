var express = require('express'),
  Restaurant = require('../models/restaurant').Restaurant,
  Photo = require('../models/photo').Photo,
  router = express.Router();

/* GET users listing. */
router.post('/', upload.single('picture'), function(req, res, next) {
    Restaurant.findOne({name: req.body.name}, function(error, doc){
      if(error) res.render('error', {error:error});
      if(!doc) {
        var restaurant = new Restaurant({
          name: req.body.name,
          address: req.body.address,
          createdBy: req.session.user_id,
          mainPicture: req.file.filename
        });
        var picture = new Photo({
          restaurant: restaurant._id,
          url: req.file.filename,
          position: 1
        })
        restaurant.save(function(error){
          if(error) res.render('error', {error:error});
          else {
            picture.save(function(error){
              if(error) res.render('error', {error:error});
              else res.redirect('/dash');
            });
          }
        });
      }
    });
});

router.get('/new', function(req, res, next){
	res.render('restaurants/new', {title: 'Restaurantify - New'});
});

router.get('/:id', function(req, res, next){
  Restaurant.findOne({_id:req.params.id}).populate({path:'photos', select: 'url'}).populate({path:'createdBy', select: 'username'}).exec(function(error, restaurant){
    res.send(restaurant);
  })
});
module.exports = router;
