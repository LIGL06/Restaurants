var User = require('../models/user').User;

module.exports = function(req, res, next){
  if(!req.session.user_id)  res.redirect('/auth/signin')
  else {
    User.findById(req.session.user_id, function(error, user){
      if(error) res.render('error', {title: 'Restaurantify', error:error});
      else {
        res.locals = {user:user};
        next();
      }
    })
  }
}
