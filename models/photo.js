var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/photos';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var photo_schema = new Schema({
	restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant'},
	url: String,
	position: Number,
	created: { type: Date, default: Date.now }
});

var Photo = mongoose.model('photo', photo_schema);
module.exports.Photo = Photo;
