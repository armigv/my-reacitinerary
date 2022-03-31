const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const commentController = {
  crearComentarios: async (req, res) => {
    const { itinerary, user, message } = req.body.dataComments;

    new Comments({
      itineraries: itinerary,
      user: user,
      comment: message,
    }).save();

    let comentario;
    try {
      comentario = await Comments.find({ itineraries: itinerary }).populate(
        "user"
      );
    } catch (err) {
      console.log(error);
    }
    res.json({
      success: true,
      response:{comentario},
    });

    await axios
      .post("http://localhost:4000/api/signIn", { dataComments })
      .then((response) => setComment(response.data.response.commentario));
  },





  obtenerComentarios: async (req, res) => {
    const { id} = req.params.id;

    let comentario;
    try {
      comentario = await Comments.find({ itineraries: id}).populate(
        "user"
      );
    } catch (err) {
      console.log(error);
    }
    res.json({
      success: true,
      response:{comentario},
    });

  },



  
  borrarComentarios: async (req, res) => {
    const { id} = req.params.id;

    let comentario;
    try {
      comentario = await Comments.findOneAndDelete({ _id: id}).populate(
        "user"
      );
    } catch (err) {
      console.log(error);
    }
    res.json({
      success: true,
      response:{comentario},
    });

  },




  
  
  modificarComentarios: async (req, res) => {
    const { id} = req.params.id;

    let comentario;
    try {
      comentario = await Comments.findOneAndUpdate({ _id: id}).populate(
        "user"
      );
    } catch (err) {
      console.log(error);
    }
    res.json({
      success: true,
      response:{comentario},
    });

  }


  


};
module.exports = commentController;
