const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");

const BD = require("./Conexion/conn.js")
const esquemaProductos = require("./Modelo/producto.js");
const { updateOne } = require("./Modelo/producto.js");

//Constates para usar express
const port = 5000;
const app = express();

//conctar bd
mongoose.connect(BD.mongoURL, { useNewUrlParser: true })

app.listen(port, () => {
    console.log("Ejecuto la app en el puerto " + port)
})

//get AdminLista de todos los productos

app.get('/Productos', (req, res) => {
    esquemaProductos.find(function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.send(esquemaProductos);
    })

})

//get Clientes lista de los productos con stock
app.get('/ProductosStock', (req, res) => {
    esquemaProductos.find({ stock: { $gte: 1 } }, function (err, esquemaProductos) {
        if (err) return console.err(err)
        res.send(esquemaProductos);
    })

})

//post para crear nuevos productos



//put para actualizar el stock
app.put('/modificarStock', (req, res) => {
    //id del producto a modifcar
    //nueva cantidad de stock

    esquemaProductos.updateOne({ id: "PROD-001" }, { stock: "2000" }, function (err) {
        if (err) return console.error(err);

    })
    res.send("Dato Actualizado")

})

//put para actulziar los productos
