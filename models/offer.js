var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/offers';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var offer_schema = new Schema({
	restaurant: {
		type: Schema.Types.ObjectId,
		ref: 'Restaurant'
	},
	discount: {
		type: Number,
		min: 0,
		max: 100
	},
	type: String,
	QR: {
		type: Schema.Types.ObjectId,
		ref: 'QR'
	},
	created: {
		type: Date,
		default: Date.now
	}
});

var Offer = mongoose.model('offer', offer_schema);
module.exports.Offer = Offer;
