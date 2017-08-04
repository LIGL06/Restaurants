var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	User = mongoose.model('user'),
	Photo = mongoose.model('photo'),
	Comment = mongoose.model('comment'),
	mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/restaurants';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var restaurant_schema = new Schema({
	name: String,
	address: String,
	type: String,
	score: Number,
	mainPicture: String,
	likes: { type: Number, default: 0 },
	visits: { type: Number, default: 0 },
	created: { type: Date, default: Date.now },
	createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
	photos: [{type: Schema.Types.ObjectId, ref: 'photo' }],
	comments: [{type: Schema.Types.ObjectId, ref: 'comment' }],
});

var Restaurant = mongoose.model('restaurant', restaurant_schema);
module.exports.Restaurant = Restaurant;
