var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: String,
    age: String,
    location: String
});

module.exports = mongoose.model('User', UserSchema);
