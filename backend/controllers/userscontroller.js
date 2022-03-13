const nodemailer = require("nodemailer");
const crypto =require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

async function sendEmail(email, uniqueText){

    const transporter=nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{

            user:"kaira.mytinerary@gmail.com",
            pass:"prueba1234"
        }

    })

    const sender="kaira.mytinerary@gmail.com"
    const mailOptions={
        from:sender,
        to:email,
        subject:"Verificacion de usuario",
        html:`Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`
    }
   await transporter.sendMail(mailOptions, function(error,response){
       if (error) {
           console.log(error)
       }else{
           console.log("mensaje enviado")//parametros que se envian al usuario
       }
   })
}

const usersControllers = {

    verifyEmail: async (req, res) => { //es el controlador que recibe el click del usuario en el email
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/signin")
        }
        else {
            res.json({ success: false, response: "Your e-mail could not be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { firstname, lastname, email, password, from } = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
              res.json({
                          sucess: false,
                          response: "Su usuario ya existe, realice el SignIn",
                        });
              
                /* Facebook start if */
                // if(from !== "SignUp"){
                //     const passwordHash = bcryptjs.hashSync(password, 10)
                //     usuarioExiste.password= passwordHash;
                //     usuarioExiste.emailVerificado= true;
                //     usuarioExiste.from= from;
                //     usuarioExiste.connected= false; 

                //     usuarioExiste.save();
                //     res.json({success:true, response:"Actualizo el singin, ahora lo puedes hacer con"+ from})        
                // }else{
                //     res.json({success:false, response:"EL nombre de usuario ya esta en uso"})
                // }
                 /* Facebook end if */

                  /* Google start if */                     
             
                 if(google){                
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    usuarioExiste.password= passwordHash;
                    usuarioExiste.emailVerificado= true;
                    usuarioExiste.google= true;
                    usuarioExiste.connected= false;
                    usuarioExiste.save();
                    res.json({success:true, from:"google", response:"Actualizo el singin, ahora lo puedes hacer con google"})                   
                    
                }else{
                    res.json({success:false, from:"SignUp", response:"Este email ya esta en uso, por favor realiza singIN"})                   
                }
                 /*google end if */
                

             } /* final de if de usuario existe */
             
             else { /* start else del if de usuario existe */
                const emailVerificado = false
                const uniqueText = crypto.randomBytes(15).toString("hex") //texto randon de 15 caracteres hexadecimal                
                const passwordHash = bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerificado,
                    connected:false,
                    
                })

                 /* Facebook start else */

                // if (from !== "SignUp") {
                //     newUser.emailVerificado=true;
                //     newUser.from= from;
                //     newUser.connected=false;
                    
                //     await newUser.save()

                //     res.json({success:true,data:{newUser},response:"Felicitaciones hemos creado tu usuario con"+"" +from})
                // }else{
                //     newUser.emailVerificado=false;
                //     newUser.from= from;
                //     newUser.connected= false;

                //     await newUser.save();
                //     await sendEmail(email, uniqueText);

                //     res.json({ success:true, response: "We have sent an e-mail to verify your e-mail address" , data:{newUser}})

                // }

                /* Facebook end else */

                /* Google start else */
                if(google){
                    newUser.emailVerificado= true;
                    newUser.google=true,
                    newUser.connected= false,
                    await newUser.save()
                    res.json({success:true,from:"google", response:"Felicitaciones hemos creado tu usuario con google",data:{newUser}})
                }
                else {
                    newUser.emailVerificado=false
                    newUser.google= false
                    newUser.connected= false
                    await newUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success:true, from:"SingUp", response: "We have sent an e-mail to verify your e-mail address" , data:{newUser}})
                } //* google end else */
            }/* final del else de usuario existe */
        }/* final de try */
        catch (error) { res.json({ success: "falseVAL",from:"SingUp",  response:"EL correo ya esta en uso", error: error }) }
    },


















// const { response } = require("express")
// const User = require("../models/user");
// const bcryptjs = require("bcryptjs");
// const nodemailer = require("nodemailer");
// const crypto = require("crypto");
// const jst = require("jsonwebtoken");

// async function sendEmail(email, uniqueText) {

//   const transporter = nodemailer.createTransport({

//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {

//       user: "ajgy94109@gmail.com", //crear correo para la parctica emisor 
//       pass: "prueba123"

//     }

//   })
//   const sender = "ajgy94109@gmail.com" // correo de verificacion recepto
//   const mailOptions = {

//     from: sender,
//     to: email,
//     subject: "verificacion de usuario ",
//     html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`

//   }
//   await transporter.sendMail(mailOptions, function (error, response) {

//     if (error) {
//       console.log(error)
//     }
//     else {
//       alert("mensaje enviado")// parametros para el usuario 
//     }
//   })

// }


// const usersController = {

//   verifyEmail: async (req, res) => {
//     const { uniqueText } = req.params// toma el parametro de la clave 
//     const user = await User.findOne({ uniqueText: uniqueText })
//     if (user) {
//       user.emailVerificado = true
//       await user.save()
//       res.redirect("http://localhost:3000/iniciosesion")

//     } else {
//       res.json({ success: false, response: "It has not been possible to verfy your email" })
//     }

//   },


//   nuevoUsuario: async (req, res) => {

//     const { firstname, lastname, email, password } = req.body.NuevoUsuario
    
//     try {
//       const UsuarioExiste = await User.findOne({ email })

//       if (UsuarioExiste) {
//         res.json({ success: "falseUE", response: "Usuario ya existe, te invitamos al SignIn" })//responseUE

//       }
//       else {

//         const uniqueText = crypto.randomBytes(15).toString("hex")//genera un text de 15 caracteres hexagecimal  
//         const emailVerificado = false
//         const passwordHash = bcryptjs.hashSync(password, 10)
//         const NewUser = new User({
//           firstname,
//           lastname,
//           email,
//           password: passwordHash,
//           uniqueText,
//           emailVerificado,
//           connected:false,

//         })
//         if (!emailVerificado) {
          
//           await NewUser.save()
//           await sendEmail(email, uniqueText)
//           res.json({ success: "trueUE", response: "te hemos envia un correo electronico  para verifica tu email" })
//         }
       

//       }

//     }

//     catch (error) { res.json({ success: "falseUE", response: null, error: error }) }

//   },

























//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "ajgy94109@gmail.com",
//       password: process.env.NODEMAILER,
//     },
//   });

//   const sender = "ajgy94109@gmail.com";
//   const mailOptions = {
//     from: sender,
//     to: email,
//     subject: "verifique",
//     html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`,
//   };

//   await transporter.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Message sent");
//     }
//   });
// }

// const usersController = {
//   verifyEmail: async (req, res) => {
//     //es el controlador que recibe el click del usuario en el email
//     const { uniqueText } = req.params;
//     const user = await User.findOne({ uniqueText: uniqueText });
//     if (user) {
//       user.emailVerificado = true;
//       await user.save();
//       res.redirect("http://localhost:3000/signIn");
//     } else {
//       res.json({
//         success: false,
//         response: "Your e-mail could not be verified",
//       });
//     }
//   },

//   nuevoUsuario: async (req, res) => {
//     const { firstname, lastname, email, password, google } =
//       req.body.NuevoUsuario;
//     console.log(req.body.NuevoUsuario);

//     try {
//       const UsuarioExistente = await User.findOne(email);

//       if (UsuarioExistente) {
//         res.json({
//           sucess: false,
//           response: "Su usuario ya existe, realice el SignIn",
//         });

//         if (google) {
//           const passwordHash = bcryptjs.hashSync(password, 10);
//           UsuarioExistente.password = passwordHash;
//           UsuarioExistente.emailVerificado = true;
//           UsuarioExistente.google = true;
//           UsuarioExistente.connected = true;

//           usuario.save();
//           response.json({
//             success: true,
//             from: "google",
//             response: "actualizamos signin con google",
//           });
//         } else {
//           response.json({
//             success: true,
//             from: "SignUp",
//             response: "este email ya esta en uso, realza SignIn",
//           });
//         }
//       }
//       const uniqueText = crypto.randomBytes(15).toString("hex");
//       const emailverificado = false;

//       const passwordHash = bcryptjs.hashSync(password, 10);
//       const nuevoUsuario = new User({
//         firstname,
//         lastname,
//         email,
//         password: passwordHash,
//         uniqueText,
//         emailverificado,
//       });

//       if (google) {
//         (nuevoUsuario.emailverified = true),
//           (nuevoUsuario.google = true),
//           (nuevoUsuario.connected = false),
//           await nuevoUsuario.save();
//         res.json({
//           success: true,
//           from: "google",
//           response: "Felicitaciones, hemos creado tu usuario con Google",
//           data: { nuevoUsuario },
//         });
//       } else {
//         (nuevoUsuario.emailverified = false),
//           (nuevoUsuario.google = false),
//           (nuevoUsuario.connected = false),
//           await NewUser.save();
//         await sendEmail(email, uniqueText);
//         res.json({
//           sucess: "trueUE",
//           from: "SignUp",
//           response: "Email enviado  exitosamente",
//           data: { nuevoUsuario },
//         });
//       }
//     } catch (error) {
//       res.json({
//         sucess: "falseUE",
//         from: "SignUp",
//         response: null,
//         error: error,
//       });
//     }
//   },

  accesoUsuario: async (req, res) => {
    const { email, password } = req.body.userData;

    try {
      const usuario = await User.findOne({ email });

      if (!usuario) {
        res.json({
          success: false,
          from: "controller",
          error: "el usuario y/o contraseña es incorrecto",
        });
      } else {
        if (usuario.emailVerificado) {
          let passwordCoincide = bcryptjs.compareSync(
            password,
            usuario.password
          );

          if (passwordCoincide) {
            const token = jwt.sign({ ...usuario }, process.env.SECRETKEY);
            const datosUser = {
              firstName: usuario.firstName,
              lastName: usuario.lastName,
              email: usuario.email,
            };
            usuario.connected = true;
            await usuario.save();
            res.json({
              success: true,
              from: "controller",
              response: { token, datosUser },
            }); // "logueado" })
          } else {
            res.json({
              success: false,
              from: "controller",
              error: "el usuario y/o contraseña es incorrecto",
            });
          }
        } else {
          res.json({
            success: false,
            from: "controller",
            error: "verifica tu e-mail para validarte",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, response: null, error: error });
    }
  },

  cerrarSesion: async (req, res) => {
    const email = req.body.email;
    console.log(req.body.email);

    const user = await User.findOne({ email });

    user.connected = false;

    await user.save();
    res.json({ success: true, response: "Sesión cerrada" });
  },
};

module.exports = usersControllers;
