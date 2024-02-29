//***************Declaraciones****************

const app =require("./src/app/app");



//Conexion al puerto
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Servidor escuchando el puerto "+PORT)
})