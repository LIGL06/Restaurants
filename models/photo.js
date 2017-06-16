var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/photos';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var photo_schema = new Schema({
	restaurant: String,
	position: String,
	created: {
		type: Date,
		default: Date.now
	}
});

var Photo = mongoose.model('photo', photo_schema);
module.exports.Photo = Photo;
