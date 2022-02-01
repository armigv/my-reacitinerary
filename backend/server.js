require("dotenv").config()
const express = require ("express") //Node
const  app  = express()
require("./config/database")

app.use(express.json()) 

app.listen("4000",()=> console.log("servidor inicializado en puerto 4000"))