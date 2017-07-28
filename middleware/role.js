var Role = require('../models/role').Role;

module.exports = function(req, res, next){
  if(!req.session.user_id)
    res.redirect('/auth/signin')
  else {
    Role.findById(req.session.user_id, function(error, user){
      if(error)
         res.render('error', {title: 'Restaurantify', error:error});
      else {
        res.locals = {user:user};
        next();
      }
    })
  }
}