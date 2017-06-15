var express = require('express');
var Comment = require('../models/comment').Comment;
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next){
  var comment = new Comment({
    user: req.body.user,
    restaurant: req.body.restaurant,
    text: req.body.text
  });
  comment.save().then(function(){
    res.send(comment);
  });
});

module.exports = router;
