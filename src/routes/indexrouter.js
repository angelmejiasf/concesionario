const router = require("express").Router();

const Clientes = require("../model/clientes");
const Fabricantes = require("../model/fabricantes");
const Vehiculos = require("../model/vehiculos");
const Compras = require("../model/compras")

// **********CLIENTES*************

router.get("/clientes", async (req, res) => {

    // MOSTRAR TODOS LOS CLIENTES
    const cliente = await Clientes.findAll()
    res.json(cliente)



})

router.post("/clientes", async (req, res) => {
    // CREACION DE UN NUEVO CLIENTE
    const newcliente = await Clientes.create({
        nombre_cli: "Angel", direccion_cli: "Cristobal Colon", fechanac_cli: "11/03/2002", telefono_cli: "699089898"
    })
    res.json(newcliente)
})


// *********VEHICULOS**********
router.get("/vehiculos", async (req, res) => {
    // MOSTRAR LOS CLIENTES CON ESTE FILTRO
    const vehiculos = await Vehiculos.findAll({
        attributes: ["nombre_veh", "unidades_veh", "precio_veh"],
        where: { nombre_veh: "Xsara" }
    })
    res.json(vehiculos)
})


router.post("/vehiculos", async (req, res) => {
    // CREAR UN NUEVO VEHICULO
    const newvehiculo = await Vehiculos.create({ nombre_veh: "Renault c4", unidades_veh: "34", precio_veh: "7000" });
    res.json(newvehiculo)
})
router.put("/vehiculos", async (req, res) => {
    // MODIFICAR VEHICULO POR ID
    const modifyvehiculo = await Vehiculos.update({ nombre_veh: "Xsara", unidades_veh: "33" }, { where: { id_veh: 1 } })
    res.json(modifyvehiculo)
})

router.delete("/vehiculos", async (req, res) => {
    // ELIMINAR UN VEHICULO POR ID
    const deletevehiculo = await Vehiculos.destroy({ where: { id_veh: 7 } })
    res.json(deletevehiculo)
})


// ********FABRICANTES********
router.post("/fabricantes", async (req, res) => {
    //CREAR UN NUEVO FABRICANTE
    const newfabricante = await Fabricantes.create({ nombre_fab: "fabricante Renault", direccion_fab: "direccion Renault", fechanac_fab: "", telefono_fab: "33333333" })
    res.json(newfabricante)
})


router.get("/fabricantes", async (req, res) => {
    // MOSTRAR LOS VEHICULOS DE UN FABRICANTE POR SU ID
    const fabricantes = await Fabricantes.findAll({
        attributes: ["nombre_fab"],
        include: [
            {
                model: Vehiculos,
                attributes: ["nombre_veh", "precio_veh", "unidades_veh"]
            }

        ],
        where: { id_fab: "2" }
    })

    res.json(fabricantes);
})

// ********COMPRAS**********

router.post("/compras", async (req, res) => {
    // CREAR NUEVA COMPRA
    const newcompra = await Compras.create({
        fecha_compra: "11/03/2023", precio_compra: "333", VehiculoIdVeh: 1, ClienteIdCli: 3
    })
    res.json(newcompra)
})

router.get("/compras", async (req, res) => {
    // MOSTRAR TODOS LOS DATOS DE LAS COMPRAS INCLUIDO EL VEHICULO,FABRICANTE Y CLIENTE
    const compras = await Compras.findAll({
        attributes: ["fecha_compra", "precio_compra"],
        include: [{
            model: Vehiculos,
            attributes: ["nombre_veh"],
            include: [{
                model: Fabricantes,
                attributes: ["nombre_fab"]
            }]

        }, {
            model: Clientes,
            attributes: ["nombre_cli"]
        }]



    })

    res.json(compras)
})

module.exports = router;

