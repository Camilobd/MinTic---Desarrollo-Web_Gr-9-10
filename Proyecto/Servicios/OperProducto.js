const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const BD = require("./Conexion/conn.js")
const esquemaProductos = require("./Modelo/producto.js");


const CORS = require("Cors");// incluimos esta linea para controlar el acceso a puertos
const producto = require("./Modelo/producto.js");

//Constates para usar express
const port = 5000;
const app = express();
app.use(CORS());
app.use(express.json());

//conctar bd
mongoose.connect(BD.mongoURL, { useNewUrlParser: true })

app.listen(port, () =>{
    console.log("Mi aplicacasdion se esta ejecutando en el puerto "+port)
})

//get obtener info, necesitamso parametroa para filtrar
app.get('/Productos',( req , res ) =>{   
    
    esquemaProductos.find(function(err, esquemaProductos){
        if (err) return console.err(err); 
        res.status(200).json(esquemaProductos);      
        
    })
    
})


app.get('/ProductosStock',( req , res ) =>{   
    console.log("Productos Stock");
    esquemaProductos.find({stock:{$gte:1 }},function(err, esquemaProductos){
        if (err) return console.err(+err);        
        res.send(esquemaProductos)
    })
    
})

app.post("/GuardarProducto", (req, res) => {
    nuevoProdcuto = new producto(req.body)
    esquemaProductos.create(nuevoProdcuto)
    res.send("Producto Alamacenado correctamente ")
})