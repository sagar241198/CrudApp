const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
    name:{ type:String},
    email:{ type:String},
    number:{ type:Number},
})
const user= mongoose.model("user",UserSchema);
module.exports = user;