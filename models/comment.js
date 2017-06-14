var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/products';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var comment_schema({
	created: {
		type: Date,
		default: Date.now
	}
});

var Comment = mongoose.model('comment', comment_schema);
module.exports.Comment = Comment;
