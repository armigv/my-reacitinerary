



const mongoose= require("mongoose")

const usersSchema= new mongoose.Schema({

    itinerario:{type:mongoose.Types.ObjectId,ref:"itinerario",require:true},
    user:{type:mongoose.Types.ObjectId,ref:"user",require:true},
    comment:{type:String,require:true},

   
})
 
const Comments = mongoose.model("comments",usersSchema)

module.exports= Comments;