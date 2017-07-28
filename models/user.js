const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoUri = process.env.MONGODB_URI||'mongodb://localhost/users'
mongoose.connect(mongoUri, function(error){
  if (error) throw error
})
const email_match = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "use a valid email"];
const user_schema = new Schema({
  fname: {type: String, required: "full name is mandatory"},
  sex: String,
  email: {type: String, required: "email is mandatory", match: email_match, unique: true},
  username: {type: String, required: "username is mandatory", unique: true},
  password: {type: String, required: "password is mandatory"},
  type: {type: Boolean, default: false},
  created: {type: Date, default: Date.now}
})
const User = mongoose.model('user',user_schema)
module.exports.User = User
