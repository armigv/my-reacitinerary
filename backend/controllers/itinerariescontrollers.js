const Cities = require("../models/cities.js");
const Itineraries = require("../models/itineraries.js");

const itinerariesController = {
    GetItineraries:async(req,res) => {
       let citys
        let itineraries
        console.log(req.params)

        const id = req.params.id
        let error = null
        try {
            citys= await Cities.findOne({_id:id})
            console.log(citys)
            itineraries = await Itineraries.find({city:citys.name})
        } catch (err) {
            error = err
            console.log(error)
            
        }

        res.json({
            response:error?"Error":{citys,itineraries},
            success:error?false:true,
            error:error
        })

    }  // pide un requrimiento y da una respuesta
}

module.exports = itinerariesController;
