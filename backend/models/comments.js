



const mongoose= require("mongoose")

const usersSchema= new mongoose.Schema({

    itinerarie:{type:mongoose.Types.ObjectId,ref:"itineraries",require:true},
    user:{type:mongoose.Types.ObjectId,ref:"users",require:true},
    comment:{type:String,require:true},

   
})
 
const Comments = mongoose.model("comments",usersSchema)

module.exports= Comments;