const mongoose = require("mongoose");

const itinerariesSchema = new mongoose.Schema({
  city:{type:String,require:true},
  about:{type:String,require:true},
  place:{type:String,require:true},
  title:{type:String,require:true},
  description:{type:String,require:true},
  price:{type:String,require:true},
  img: {type:String,require:true},
  likes:{type:Array},

  
});

const Itineraries = mongoose.model("itineraries", itinerariesSchema);

module.exports = Itineraries;
