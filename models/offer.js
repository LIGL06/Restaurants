var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUrl = process.env.MONGODB_URI || 'mogodb://localhost/offers';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var offer_schema = new Schema({
	restaurant: String,
	discount: {
		type: Number,
		min: 0,
		max: 100
	},
	QR: String,
	id: Number
});

var Offer = mongoose.model('offer', offer_schema);
module.exports.Offer = Offer;
