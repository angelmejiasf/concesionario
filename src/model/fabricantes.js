const { Sequelize, Model, DataTypes, STRING } = require("sequelize");


// CONEXION A LA BASE DE DATOS
const sequelize = new Sequelize("concesionario", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});


class Fabricantes extends Model{}

Fabricantes.init({
    id_fab:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    nombre_fab:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"El nombre no puede ser nulo"
            }
        }
    },
    direccion_fab:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"La direccion no puede ser nula"
            }
        }
    },
    telefono_fab:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                msg:"El telefono no puede ser nulo"
            }
        }
    }



},{
    sequelize,
    modelName:"Fabricantes",
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

module.exports=Fabricantes;