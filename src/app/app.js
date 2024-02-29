//**********Declaraciones*********** 
const express = require("express");
const app = express();

//Conexion con router y lo de dentro
const router = require("../routes/indexrouter");

const database=require("../database/assotations");


//******************************** */


//Mostrar la conexion realizada
app.get("/", (req, res) => {
    res.send("Conexion realizada")

})

//Mostrar la conexion hacia router
app.use("/concesionario", router)

module.exports = app;