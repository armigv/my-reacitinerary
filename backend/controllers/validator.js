const joi = require ("joi")
const {nuevoUsuario} = ("./usercontroller")

const validator = (req,res,next) => {

    const schema = joi.object({

firstname:joi.string().max(10).min

    })

    const validation= schema.validate(req.body.NuevoUsuario,{abortEarly:false})

if(validation.error) {

    return res.json({sucess:false, response:validation})
}
next
}