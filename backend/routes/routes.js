const Router = require("express").Router();

const citiesController = require("../controllers/datacontroller");
const itinerariesController = require("../controllers/itinerariescontrollers");

const { GetAllData } = citiesController; // desestructuracion del controlador de cities
const { GetItineraries } = itinerariesController;

const usercontrollers = require("../controllers/userscontroller");
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion } = usercontrollers;

const validator = require ("../controllers/validator")

const commentController = require("../controllers/commentsControllers")
const {crearComentarios,obtenerComentarios,borrarComentarios,modificarComentarios} = commentController;

Router.route("/datos") // "datos" parte de la URL de la consulta
  .get(GetAllData);


  
Router.route("/itinerarie/:id").get(GetItineraries);

Router.route("/signUp").post(validator,nuevoUsuario);

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarSesion)

    Router.route("/comments")
    .post(crearComentarios)

    Router.route("/comments/:id")
    .get(obtenerComentarios)
    .delete(borrarComentarios)
    .put(modificarComentarios)




module.exports = Router;
