const Router = require("express").Router();

const citiesController = require("../controllers/datacontroller");

const itinerariesController = require("../controllers/itinerariescontrollers");

const { GetAllData } = citiesController; // desestructuracion del controlador de cities

const { GetAllItineraries } = itinerariesController;
const usercontrollers = require("../controllers/userscontroller");
const { nuevoUsuario } = usercontrollers;
const validator = require ("../controllers/validator")


Router.route("/datos") // "datos" parte de la URL de la consulta
  .get(GetAllData);

Router.route("/itinerarios/:city").get(GetAllItineraries);

Router.route("/sigup").post(nuevoUsuario);

module.exports = Router;
