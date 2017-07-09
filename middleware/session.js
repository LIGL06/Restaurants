var User = require('../models/user').User;

module.exports = function(req, res, next){
  if(!req.session) res.redirect('/auth/login');
  else{
    User.findById(req.session.user_id, function(error, user){
      if(error) res.redirect('/auth/login');
      else {
        res.locals = {user:user};
        next();
      }
    })
  }
}
