var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/offers';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var offer_schema = new Schema({
	name: String,
	user: { type: Schema.Types.ObjectId, ref: 'user' },
	restaurant: { type: Schema.Types.ObjectId, ref: 'restaurant'},
	discount: { type: Number, min: 0, max: 50, default: 0 },
	instances: { type: Number, min: 0, max: 100, default: 0 },
	type: String,
	QR: { type: Schema.Types.ObjectId, ref: 'qr' },
	created: { type: Date, default: Date.now	}
});

var Offer = mongoose.model('offer', offer_schema);
module.exports.Offer = Offer;
