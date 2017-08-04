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
          mainPicture: req.file.filename,
        });
        var picture = new Photo({
          restaurant: restaurant._id,
          url: req.file.filename,
          position: 1
        })
          restaurant.photos = picture._id;
        restaurant.save(function(error){
          if(error) res.render('error', {error:error});
          else {
            picture.save(function(error){
              if(error) res.render('error', {error:error});
              else res.redirect('/');
            });
          }
        });
      }
    });
});
  
router.get('/edit/:id', function(req, res, next){
  Restaurant.findOne({_id:req.params.id}).populate({path:'photos', select: 'url'}).populate({path:'createdBy', select: 'username'}).exec(function(error, restaurant){
    res.render('restaurants/edit', {title:'Restaurantify - Editar', restaurant:restaurant});
  });
});

router.post('/edit/:id', upload.single('picture'), function(req, res, next){
  Restaurant.findOneAndUpdate({_id:req.params.id}, { $set:{name:req.body.name,address:req.body.address,mainPicture:req.file.filename}}, { new: true }, function(error, restaurant){
    if (error) throw error;
    else {
      Photo.findOneAndUpdate({restaurant:restaurant._id}, { $set:{url:req.file.filename,restaurant:restaurant._id}}, { new:true }, function(errorPhoto,photo){
        if(errorPhoto) throw errorPhoto;
        else{
          res.redirect('/restaurants/all');
        }
      });
    };
  });
});

router.get('/new', function(req, res, next){
	res.render('restaurants/new', {title: 'Restaurantify - New'});
});

router.get('/all', function(req, res, next){
  Restaurant.find({createdBy:req.session.user_id}).populate({path:'photos', select: 'url'}).exec(function(error, restaurants){
    // res.send(restaurants);
    res.render('restaurants/list', {title: `Resturantify - Mis Restaurantes`, restaurants:restaurants});
  });
});

router.get('/:id', function(req, res, next){
  Restaurant.findOne({_id:req.params.id}).populate({path:'photos', select: 'url'}).populate({path:'createdBy', select: 'username'}).exec(function(error, restaurant){
    // res.send(restaurant);
    res.render('restaurants/show', {title: `Restaurantify`,rest:restaurant});
  });
});
module.exports = router;
