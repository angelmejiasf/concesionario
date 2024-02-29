const { Sequelize, Model, DataTypes } = require("sequelize");


// CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Usuarios extends Model{}

Usuarios.init({
    id_user:{
        type:DataTypes.TINYINT,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre_user:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    apellidos_user:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email_user:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isEmail:true,
        }
    },
    password_user:{
        type:DataTypes.STRING,
        allowNull:true,
    }

},{
    sequelize,
    modelName:"Users",
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


module.exports=Usuarios;