var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/auth/signin', function (ctx, next) {
  title('Restaurantify - Signin');
  var main = document.getElementById('main-container');
  empty(main).appendChild(template);
})