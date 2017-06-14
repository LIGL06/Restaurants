var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/rewards';

mongoose.connect(mongoUri, function(error) {
	if (error) throw error
});

var reward_schema = new Schema({
	value: Number,
	points: Number,
	cumulativeMax: Number,
	created: {
		type: Date,
		default: Date.now
	}
});

var Reward = mongoose.model('reward', reward_schema);
module.exports.Reward = Reward;
