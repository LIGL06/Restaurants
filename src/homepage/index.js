var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var request = require('superagent');
var header = require('../header');

page('/',header,asyncload,function (ctx, next) {
  var main = document.getElementById('main-container');
  empty(main).appendChild(template(ctx.pictures));
})
function loadPictures(ctx, next){
  request
    .get('/api/pictures')
    .end(function(error,res){
      if (error) return console.log(error)
      ctx.pictures = res.body;
      next()
    })
  }
function loadPicturesAxios(ctx, next){
  axios
    .get('/api/pictures')
    .then(function(res){
      ctx.pictures = res.data;
      next()
    })
    .catch(function(error){
      console.log(error);
    })
}
function loadPicturesFetch(ctx, next){
  fetch('/api/pictures')
    .then(function(res){
      return res.json()
    })
    .then(function(pictures){
      ctx.pictures = pictures
      next()
    })
    .catch(function(error){
      console.log(error)
    })
}
async function asyncload(ctx,next){
  try {
    ctx.pictures = await fetch('/api/pictures').then(res =>res.json())
    next()
  } catch (e) {
    return console.log(e)
  } finally {

  }
}