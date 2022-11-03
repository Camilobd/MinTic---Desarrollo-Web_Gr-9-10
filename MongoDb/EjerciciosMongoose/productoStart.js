var mongoose = require("mongoose");
var esquemaProductos = require("./modelo/productos.js")

mongoose.connect("mongodb://localhost:27017/TiendaIndustriales", { useNewUrlParser: true })

//guardar un producto

esquemaProductos.create({
    id: "PROD-002", nombre: "Guantes", stock: "0",
    descripcion: "guantes industriales talla 5",
    valor: "15000",
    imagen: "https://zubi-ola.com/wp-content/uploads/2016/11/11910732-800x450-copy.jpg"
}, function (err) {
    if (err) return console.err(err);
})




//Admin Listar todos los productoa
esquemaProductos.find(function(err, esquemaProductos){
    if (err) return console.err(err);
    console.log(esquemaProductos)
})



//Cliente listar los productos con stock //$gte mayo o igual 
// Investigar funciones de comparacion en mongoose
esquemaProductos.find({stock:{$gte:1 }},function(err, esquemaProductos){
    if (err) return console.err(err);
    console.log(esquemaProductos)
})

//editar el stock
esquemaProductos.updateOne({id:"PROD-002"},{stock:"2000"}, function(err){
    if (err) return console.err(err); 
})


//Editar los datos del producto