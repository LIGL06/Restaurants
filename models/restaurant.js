var mongoose = require('mongoose');
var Schema = require.Schema;
var mongoUrl = process.env.MONGODB_URI || 'mogodb://localhost/restaurants';
mongoose.connect(mongoUri, function(error) {
	if (error) throw error;
})

var restaurant_schema = new Schema({
	name: String,
	score: Number,
	address: String,
	visits: Number,
	type: String,
	created: {
		type: Date,
		default: Date.now
	}
});
var Restaurant = mongoose.model('restaurant', restaurant_schema);
modeule.exports.Restaurant = Restaurant;
