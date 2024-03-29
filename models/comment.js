var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/comments';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var comment_schema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'user' },
	restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant' },
	text: String,
	created: { type: Date,default: Date.now }
});

var Comment = mongoose.model('comment', comment_schema);
module.exports.Comment = Comment;
