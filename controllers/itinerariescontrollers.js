const Cities = require("../models/cities.js");
const Itineraries = require("../models/itineraries.js");

const itinerariesController = {
    GetItineraries:async(req,res) => {
    //    let citys
        let itineraries
        console.log(req.params)

        const city = req.params.city
        let error = null
        try {
            // citys= await Cities.findOne({_id:id})
            // console.log(citys)
            itineraries = await Itineraries.find({city:city})
        } catch (err) {
            error = err
            console.log(error)
            
        }

        res.json({
            response:error?"Error":{itineraries},
            success:error?false:true,
            error:error
        })

    }  // pide un requerimiento y da una respuesta
}

module.exports = itinerariesController;
