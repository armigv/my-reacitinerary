const Router = require("express").Router();
const passport=require("../config/passport")


const citiesController = require("../controllers/datacontroller");
const itinerariesController = require("../controllers/itinerariescontrollers");
const LikesControllers = require("../controllers/LikesControllers")

const { GetAllData } = citiesController; // desestructuracion del controlador de cities
const { GetItineraries } = itinerariesController;
const {GetLikes} = LikesControllers;

const usercontrollers = require("../controllers/userscontroller");
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion,verificarToken} = usercontrollers;

const validator = require ("../controllers/validator")

const comentariosControllers = require("../controllers/commentsControllers");
const { cargaComentarios,obtenerComentarios,borrarComentario,modificarComentario } = comentariosControllers


Router.route("/datos") // "datos" parte de la URL de la consulta
  .get(GetAllData);


  
Router.route("/itinerarie/:city").get(GetItineraries);

Router.route("/signUp").post(validator,nuevoUsuario);

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarSesion)

    

    Router.route("/coments")
.post(cargaComentarios)

Router.route("/coments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(modificarComentario)

Router.route("/signintoken")
.get(passport.authenticate("jwt",{session:false}),verificarToken)

Router.route("/likesdislikes/:id")
.put(passport.authenticate("jwt",{session:false}),GetLikes)

module.exports = Router;
