var mongoose = require("mongoose");
var esquemaProductos = require("./modelo/producto.js")
const UrlBD= require("./Conexion/conn.js")
const bodyParser = require('body-parser')
const express= require('express')
const app = express()
const port = 5000

app.use(bodyParser.json())
mongoose.connect(UrlBD.mongoURI, { useNewUrlParser: true })

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
    
    esquemaProductos.find({stock:{$gte:1 }},function(err, esquemaProductos){
        if (err) return console.err(+err);        
        res.send(esquemaProductos)
    })
    
})



//post para enviar datos o creacion de nuevas entidades



//put Actualizacion documentos completos
