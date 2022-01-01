var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    mobile: String,
    tagline: String,
    description: String
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema);