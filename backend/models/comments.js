const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  itinerary: {
    type: mongoose.Types.ObjectId,
    ref: "itineraries",
    require: true,
  },
  user: { type: mongoose.Types.ObjectId, ref: "users", require: true },
  comment: { type: String, require: true },
});

const Comments = mongoose.model("comments", commentsSchema);

module.exports = Comments;

// sdfgv
