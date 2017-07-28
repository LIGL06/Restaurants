const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoUri = process.env.MONGODB_URI||'mongodb://localhost/roles'
mongoose.connect(mongoUri, function(error){
  if (error) throw error
})
const role_schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String, default: 'user'},
    created: {type: Date, default: Date.now}
})
const Role = mongoose.model('role',role_schema)
module.exports.Role = Role
