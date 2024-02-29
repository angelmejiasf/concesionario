const { Sequelize, Model, DataTypes } = require("sequelize");


// CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Vehiculos extends Model{}

Vehiculos.init({
    id_veh:{
        type:DataTypes.TINYINT,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre_veh:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    unidades_veh:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    precio_veh:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    

},{
    sequelize,
    modelName:"Vehiculos",
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



module.exports=Vehiculos;