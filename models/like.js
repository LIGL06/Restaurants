var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
    mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/likes';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var like_schema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'user' },
	restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant' },
	created: { type: Date,default: Date.now }
});

var Like = mongoose.model('like', like_schema);
module.exports.Like = Like;
