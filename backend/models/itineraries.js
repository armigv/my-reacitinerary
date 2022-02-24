const mongoose = require("mongoose");

const itinerariesSchema = new mongoose.Schema({
  // city:{type:String,require:true},
  // title:{type:String,require:true},
  // description:{type:String,require:true},
  // schedule:{type:Number,require:true},
  // price:{type:Number,require:true},
  // img: [{
  //     type:String,require:true,
  // }]
});

const Itinerary = mongoose.model("Itineraries", itinerariesSchema);

module.exports = Itinerary;
