const Clientes = require("../model/clientes");
const Fabricantes = require("../model/fabricantes")
const Vehiculos = require("../model/vehiculos");
const Usuarios = require("../model/usuarios");
const Compras = require("../model/compras")

// **RELACIONES M:N PASANDO POR COMPRAS**
Clientes.belongsToMany(Vehiculos, { through: Compras })
Vehiculos.belongsToMany(Clientes, { through: Compras })


// RELACION 1:1 CON CLAVE EN VEHICULOS
Vehiculos.belongsTo(Fabricantes)
// RELACION 1:M CON CLAVE EN VEHICULOS
Fabricantes.hasMany(Vehiculos)

// RELACION 1:M CON CLAVE EN COMPRAS
Vehiculos.hasMany(Compras)
// RELACION 1:1 CON CLAVE EN COMPRAS
Compras.belongsTo(Vehiculos)

// RELACION 1:M CON CLAVE EN COMPRAS
Clientes.hasMany(Compras)
// RELACION 1:1 CON CLAVE EN COMPRAS
Compras.belongsTo(Clientes)