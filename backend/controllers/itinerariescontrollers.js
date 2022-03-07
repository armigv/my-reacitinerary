const Itineraries = require("../models/itineraries.js");

const itinerariesController = {
  GetAllItineraries: async (req, res) => {
    console.log(req)
    console.log(res)
    let itineraries
    console.log(req.params)
    const city = req.params.city
    let error = null
    try {
        itineraries = await Itineraries.find({city:city})
    } catch (err) {
        error = err
        console.log(error)
    }

    res.json({
        response:error ? "Error" : {itineraries},
        success:error ? false : true,
        error:error
    })

} // pide un requrimiento y da una respuesta
}

module.exports = itinerariesController;
