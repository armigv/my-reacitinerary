const nodemailer = require("nodemailer");
const crypto = require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

async function sendEmail(email, uniqueText) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "ajgy94109@gmail.com",
      pass: "prueba123",
    },
  });

  const sender = "ajgy94109@gmail.com";
  const mailOptions = {
    from: sender,
    to: email,
    subject: "Verificacion de usuario",
    html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("mensaje enviado"); //parametros que se envian al usuario
    }
  });
}

const usersControllers = {
  verifyEmail: async (req, res) => {
    //es el controlador que recibe el click del usuario en el email
    const { uniqueText } = req.params;
    const user = await User.findOne({ uniqueText: uniqueText });
    if (user) {
      user.emailVerificado = true;
      await user.save();
      res.redirect("http://localhost:3000/iniciosesion");
    } else {
      res.json({
        success: false,
        response: "Your e-mail could not be verified",
      });
    }
  },

  nuevoUsuario: async (req, res) => {
    const { firstname, lastname, email, password, from } =
      req.body.NuevoUsuario;
    console.log(req.body);
    try {
      const UsuarioExiste = await User.findOne({ email });

      if (UsuarioExiste) {
        if (from !== "signUp") {
          const passwordHash = bcryptjs.hashSync(password, 10);
          UsuarioExiste.password = passwordHash;
          UsuarioExiste.emailVerificado = true;
          UsuarioExiste.from = from;
          UsuarioExiste.connected = false;

          UsuarioExiste.save();
          res.json({
            success: true,
            mensaje: "We update your sign in so you can do it with " + from,
          });
        } else {
          res.json({
            success: false,
            mensaje: "This email is already in use, perform the signin",
          });
        }
      } else {
        const uniqueText = crypto.randomBytes(15).toString("hex"); //genera un text de 15 caracteres hexagecimal

        const emailVerificado = false;
        const passwordHash = bcryptjs.hashSync(password, 10);
        const NewUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
          uniqueText,
          emailVerificado,
          connected: false,
          from,
        });

        if (from !== "signUp") {
          (NewUser.emailVerificado = true),
            (NewUser.from = from),
            (NewUser.connected = false),
            await NewUser.save();
          res.json({
            success: true,
            data: { NewUser },
            message: "congratulations we have created your user with " + from,
          });
        } else {
          NewUser.emailVerificado = false;
          NewUser.from = from;
          NewUser.connected = false;
          await NewUser.save();
          await sendEmail(email, uniqueText);
          res.json({
            success: true,
            message: "we have sent you your email",
            data: { NewUser },
          });
        }
      }
    } catch (error) {
      res.json({
        success: false,
        from: "signUp",
        message: "The mail is already in use",
        error: error,
      });
    }
  },

  accesoUsuario: async (req, res) => {
    const { email, password } = req.body.userData;
    console.log(req.body);
    try {
      const usuario = await User.findOne({ email });

      if (!usuario) {
        res.json({
          success: false,
          from: "controller",
          message: "el usuario y/o contraseña es incorrecto",
        });
      } else {
        if (usuario.emailVerificado) {
          let passwordCoincide = bcryptjs.compareSync(
            password,
            usuario.password
          );

          if (passwordCoincide) {
            const datosUser = {
              firstName: usuario.firstName,
              lastName: usuario.lastName,
              email: usuario.email,
              id: usuario._id,

            };
            usuario.connected = true;
            await usuario.save();
            const token = jwt.sign({ ...datosUser }, process.env.SECRETKEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: "controller",
              response: {
                success: true,
                from: "controller",
                response: { token, ...datosUser  },
                message: "Bienvenido nuevamente " + usuario.firstname,
              },
            }); // "logueado" })
          } else {
            res.json({
              success: false,
              from: "controller",
              message: "el usuario y/o contraseña es incorrecto",
            });
          }
        } else {
          res.json({
            success: false,
            from: "controller",
            message: "verifica tu e-mail para validarte",
          });
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        response: null,
        message: "a ocurrido un error intentalo mas tarde",
      });
    }
  },

  cerrarSesion: async (req, res) => {
    const email = req.body.email;
    console.log(req.body.email);

    const user = await User.findOne({ email });

    user.connected = false
    await user.save();
    res.json({ success: true, message: "Sesión Cerrada" });
  },

  verificarToken: async (req, res) => {
    if (!req.error) {
      res.json({
        success: true,
        dataUser: {
          firstname: req.user.firstname,
          lastname: req.user.lastname,
          email: req.user.email,
          id: req.user.id,
        },
        message: "Bienvenido nuevamente " + req.user.firstname,
      });
    } else {
      res.json({
        success: false,
        response: "Por favor realiza nuevamente sign in",
      });
    }
  },
};

module.exports = usersControllers;
