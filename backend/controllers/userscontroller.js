const Cities = require("../models/user");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

async function sendEmail(email, uniqueText) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "armando13.133@gmail.com",
      password: process.env.NODEMAILER,
    },
  });

  const sender = "armando13.133@gmail.com";
  const mailOptions = {
    from: sender,
    to: email,
    subject: "verifique",
    html: `Presiona <a href=http://localhost:4000/api/verify/${uniqueText}`,
  };

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
console.log(error)


    }
  });
}

const usersController = {
  nuevoUsuario: async (req, res) => {
    const { firstname, lastname, email, password } = req.body.NuevoUsuario;
    console.log(req.body);

    try {
      const UsuarioExistente = await User.findOne(email);

      if (UsuarioExistente) {
        res.json({
          sucess: false,
          response: "Su usuario ya existe, realice el SignIn",
        });
      } else {
        const uniqueText = crypto.randomBytes(15).toString("hex");
        const emailverificado = false;

        const passwordHash = bcryptjs.hashSync(password, 10);
        const NewUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
          uniqueText,
          emailverificado,
        });
        if (!emailverificado) {
          await NewUser.save();
          await sendEmail(email, uniqueText);
          res.json({ sucess: true, response: "Email enviado  exitosamente" });
        }

        await NewUser.save();
        res.json({ sucess: true, response: "Usuario creado exitosamente" });
      }
    } catch (error) {
      res.json({ sucess: false, response: null, error: error });
    }
  },
};

module.exports = usersController;
