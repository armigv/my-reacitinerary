const Cities = require("../models/cities");

const citiesController = {
  GetAllData: async (req, res) => {
    let cities;
    let error = null;
    try {
      cities = await Cities.find();
    } catch (err) {
      error = err;
      console.log(error);
    }
    res.json({
      response: error ? "Error" : { cities },
      success: error ? false : true,
      error: error,
    });
  },
};
module.exports = citiesController;
