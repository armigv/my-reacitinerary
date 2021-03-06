const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstname:{type:String,require:true},
  lastname:{type:String,require:true},
  email:{type:String,require:true},
  password:{type:String,require:true},
   uniqueText:{type:String,require:true},
  emailVerificado:{type:Boolean,require:true},
  connected:{type:Boolean,require:true},
  from:{type:String,require:true},


});

const User = mongoose.model("user", usersSchema);

module.exports = User;
