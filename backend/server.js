require("dotenv").config();
const express = require("express"); //Node
const cors = require("cors");
const app = express();
const Router = require("./routes/routes");
require("./config/database");
const port = 4000;

app.use(express.json()); // tramo intermedio que pasa los datos a una variable
app.use(cors());
app.use("/api", Router);

app.listen(port, () => console.log(`servidor inicializado en puerto ${port}`));
