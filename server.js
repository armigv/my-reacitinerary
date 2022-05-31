require("dotenv").config();
const express = require("express"); //Node
const cors = require("cors");
const app = express();
const Router = require("./routes/routes");
const passport= require("passport")

require("./config/database");

const HOST= process.env.HOST||"0.0.0.0"
const PORT= process.env.PORT||4000
app.use(express.json()); // tramo intermedio que pasa los datos a una variable
app.use(cors());
app.use(passport.initialize())

app.use("/api", Router);

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(PORT,HOST,() => console.log(`servidor inicializado en puerto `+ PORT));
