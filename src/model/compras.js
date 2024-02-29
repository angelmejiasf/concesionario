const { Sequelize, Model, DataTypes } = require("sequelize");


// CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Compras extends Model{}

Compras.init({
   fecha_compra:{
    type:DataTypes.DATE,
    allowNull:false,
   },
   precio_compra:{
    type:DataTypes.DECIMAL,
    allowNull:false
   }

},{
    sequelize,
    modelName:"Compras",
    timestamps:false,
});

// REALIZAR LA CREACION DE LA TABLA

// sequelize.sync()
//     .then(() => {
//         console.log("Tablas sincronizadas correctamente");
//     })
//     .catch(err => {
//         console.error("Error al sincronizar tablas:", err);
//     });


module.exports=Compras;