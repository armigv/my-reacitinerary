const mongoose = require("mongoose") //va a almacenar los datos de la ciudades

const citiesSchema = new mongoose.Schema ({



})

const City = mongoose.model("Cities",citiesSchema)

module.exports = City;