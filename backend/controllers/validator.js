
const joi =require ("joi")

const validator =(req,res,next)=>{
    
    // console.log(req.body.NuevoUsuario)
    const Schema =joi.object({
        firstname:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"El Nombre debe contener al menos 3 caracteres",
            "string.empty":"El Campo no puede estar vacio"
        }),
        lastname:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"El Apellido debe contener al menos 3 caracteres",
            "string.empty":"El Campo no puede estar vacio"
        }),
        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"Formato de correo erroneo"

        }),
        password:joi.string().max(30).min(6).trim().pattern(new RegExp(/(?=.*[a-z])(?=.*[0-9])/)).required().messages({
         "string.min":"la contraseña debe contener minimo 6 caracteres",
         "string.pattern.base":"la contraseña debe ser alfanumerico",
         "string.max":"The password must not exceed 10 characters"
        }),

        // google:joi.boolean(),
        from: joi.string() 
    })
const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

if (validation.error){
    return res.json({success:"falseVAL",response:validation})
}
next()

}
module.exports = validator