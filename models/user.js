const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoUri = process.env.MONGODB_URI||'mongodb://localhost/users'

mongoose.connect(mongoUri, function(error){
  if (error) throw error
})

const user_schema = new Schema({
  fname: String,
  lname: String,
  sex: String,
  email: String,
  password: String,
  created: {type: Date, default: Date.now}
})

const User = mongoose.model('user',user_schema)
module.exports.User = User
