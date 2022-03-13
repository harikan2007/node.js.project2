const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const uniqueValidator = require ("mongoose-unique-validator")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true,"please provide username"],
        unique: true},
    password: {
        type: String,
        required: [true,"please provide password"]}

});
UserSchema.plugin(uniqueValidator);
UserSchema.pre("save", function(next){
    const user = this
    bcrypt.hash(user.password, 10 , (error,user)=>{
        user.password = hash
        next()
    })
})
const User = mongoose.model("User", UserSchema);
module.exports = User
