const Cities = require("../models/user");
const bcryptjs = require("bcryptjs");

const usersController = {
  nuevoUsuario: async (req, res) => {
    const { firstname, lastname, email, password } = req.body.NuevoUsuario;
    console.log(req.body)

    try {
      const UsuarioExistente = await User.findOne(email);

      if (UsuarioExistente) {
        res.json({
          sucess: false,
          response: "Su usuario ya existe, realice el SignIn",
        });
      } else {
        const passwordHash = bcryptjs.hashSync(password, 10);
        const NewUser = new User({
          firstname,
          lastname,
          email,
          password: passwordHash,
        });

        await NewUser.save();
        res.json({ sucess: true, response: "Usuario creado exitosamente" });
      }
    } catch (error) {
      res.json({ sucess: false, response: null, error: error });
    }
  },
};
module.exports = usersController;
