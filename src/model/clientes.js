const { Sequelize, Model, DataTypes } = require("sequelize");


// CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

class Clientes extends Model { }


Clientes.init({
    id_cli: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre_cli: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {

                msg: "El nombre no puede ser nulo"
            }

        }
    },
    direccion_cli: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "La direccion no puede ser nula"
            }

        }
    },
    fechanac_cli: {
        type: DataTypes.DATE,


    },
    telefono_cli:{
        type:DataTypes.STRING
    },
   


}
,{
    sequelize,
    modelName:"Clientes",
    timestamps:false
})

// REALIZAR LA CREACION DE LA TABLA
// sequelize.sync()
//     .then(() => {
//         console.log("Tablas sincronizadas correctamente");
//     })
//     .catch(err => {
//         console.error("Error al sincronizar tablas:", err);
//     });

module.exports=Clientes;