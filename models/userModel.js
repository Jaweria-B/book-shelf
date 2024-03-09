const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    // required: true,
  },
  avatar:{
    type:String,
    // required:true
  },
  coverPhoto:{
    type:String
  },
  password: {
    type: String,
    // required:true, 
  },
  following:{
    type:Number
  },
  followers:{
    type:Number
  },
  Art:{
    type:Number
  }
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
