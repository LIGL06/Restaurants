var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUrl = process.env.MONGODB_URI || 'mogodb://localhost/photos';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var photo_schema = new Schema({
	restaurant: String,
	position: Number
});

var Photo = mongoose.model('photo', photo_schema);
var.exports.Photo = Photo;
