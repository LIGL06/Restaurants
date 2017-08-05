var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/qrs';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var qr_schema = new Schema({
	text: String,
	type: String,
	url: String,
	created: { type: Date, default: Date.now }
});

var QR = mongoose.model('qr', qr_schema);
module.exports.QR = QR;
