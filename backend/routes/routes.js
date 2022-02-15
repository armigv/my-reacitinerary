const Router = require("express").Router();

const citiesController= require("../controllers/datacontroller")

const {GetAllData} = citiesController // desestructuracion del controlador de cities

Router.route("/datos") // "datos" parte de la URL de la consulta
.get(GetAllData)

module.exports = Router