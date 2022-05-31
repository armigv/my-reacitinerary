const Itineraries = require("../models/itineraries.js");



const LikesControllers = {

GetLikes:async(req,res)=>{
    const id=req.params.id;
    const user=req.user.id
    let like
    console.log(id)
    console.log(user)
    

    try {
       like= await Itineraries.findOne({_id:id})
        if(like.likes.includes(user)){

            Itineraries.findByIdAndUpdate({_id:id},{$pull:{likes:user}},{new:true})
            .then(response=>res.json({success:true,response:response.likes}))
            .catch(error=>console.log(error))
        }
        else{
            Itineraries.findByIdAndUpdate({_id:id},{$push:{likes:user}},{new:true})
            .then(response=>res.json({success:true,response:response.likes}))
            .catch(error=>console.log(error))
        }
    } catch (err) {
        error=err
        res.json({success:false,response:error})
        
    }


    
  }

}
module.exports= LikesControllers;