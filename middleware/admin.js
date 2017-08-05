var User = require('../models/user').User;

module.exports = function(req, res, next){
  if(!req.session.type)  res.send('No tiene permisos para acceder aquí');
  else {
    User.findById(req.session.user_id).where('type').equals('true').exec(function(error, user){
      if(error) res.render('error', {title: 'Restaurantify', error:error});
      else {
        res.locals = {user:user};
        next();
      }
    })
  }
}
