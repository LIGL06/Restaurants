var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/products';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var product_schema = new Schema({
	price: Number,
	created: {
		type: Date,
		default: Date.now
	}
});

var Product = mongoose.model("product", product_schema);
module.exports.Product = Product;
