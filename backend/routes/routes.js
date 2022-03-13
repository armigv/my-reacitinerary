const Router = require("express").Router();

const citiesController = require("../controllers/datacontroller");

const itinerariesController = require("../controllers/itinerariescontrollers");

const { GetAllData } = citiesController; // desestructuracion del controlador de cities

const { GetAllItineraries } = itinerariesController;
const usercontrollers = require("../controllers/userscontroller");
const { nuevoUsuario, verifyEmail, accesoUsuario, cerrarSesion } = usercontrollers;
const validator = require ("../controllers/validator")


Router.route("/datos") // "datos" parte de la URL de la consulta
  .get(GetAllData);

Router.route("/itinerarie/:city").get(GetAllItineraries);

Router.route("/signUp").post(validator,nuevoUsuario);

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
    .post(accesoUsuario)

Router.route("/signOut")
    .post(cerrarSesion)

module.exports = Router;
