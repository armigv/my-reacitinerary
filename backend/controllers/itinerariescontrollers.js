const Itineraries = require("../models/itineraries.js");

const itinerariesController = {
  GetAllItineraries: async (req, res) => {
    let itineraries;
    const city = req.params.city
    let error = null;
    try {
      itineraries = await Itineraries.find({cityTour:city});
    } catch (err) {
      error = err;
      console.log(error);
    }

    res.json({
      response: error ? "Error" : { itineraries },
      success: error ? false : true,
      error: error,
    });
  },
};

module.exports = itinerariesController;
