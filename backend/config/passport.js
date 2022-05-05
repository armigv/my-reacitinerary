
const passport=require("passport")
const jwtEstrategy=require("passport-jwt").Strategy
const extractJwt=require("passport-jwt").ExtractJwt

const User=require("../models/user")

module.exports=passport.use(new jwtEstrategy({
    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(), 
    secretOrKey:process.env.SECRETKEY
},(jwt_payload,done)=>{
    User.findOne({_id:jwt_payload.id})
    .then(user=>{
        if(user){
            return done(null, user)
        }
        else if(error){
            return done(error,false)
        }
        else{
            return done(null,false)
        }
    })
    .catch(error=>{return done(error,false)})
}))
