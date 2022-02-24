const Router = require("express").Router();

const citiesController = require("../controllers/datacontroller");

const itinerariesController = require("../controllers/itinerariescontrollers");

const { GetAllData } = citiesController; // desestructuracion del controlador de cities

const { GetAllItineraries } = itinerariesController;

Router.route("/datos") // "datos" parte de la URL de la consulta
  .get(GetAllData);

Router.route("/itinerarios/:city").get(GetAllItineraries);

module.exports = Router;
