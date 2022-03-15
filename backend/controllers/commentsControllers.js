const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const commentController= {


GetAllItineraries: async (req, res) => {
    
    const {itinerary,user,message} = req.body.dataComments

  new Comments({
itineraries:itinerary
user:user
comments:message

  }).save()


  let Comments
  try {
      Comments = await Comments.find({itineraries:itinerary}).populate("user")
  } catch (err) {
      



      console.log(error)
  }
res.json({
    success:true
        response:{Comment},
       
    })

     
    await axios.post("http://localhost:4000/api/signIn",{dataComments})
    .then(response=>
        
        setComment(response.data.response.commentario)
        )

}