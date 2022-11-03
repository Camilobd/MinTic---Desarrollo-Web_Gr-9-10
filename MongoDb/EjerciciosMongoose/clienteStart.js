var mongoose = require("mongoose");
var esquemaUsuarios= require("./modelo/usuario.js")

mongoose.connect("mongodb://localhost:27017/TiendaIndustriales", {useNewUrlParser: true})

//InsertOne/*

esquemaUsuarios.create({user:"pedro", pass:"lkj987",rol:"clientes"},function(err){
    if (err) return console.err(err);
})



//Find muchos datos
esquemaUsuarios.find(function(err, esquemaUsuarios){
    if (err) return console.err(err);
    console.log(esquemaUsuarios)
})

// Busqueda particulars

console.log("usuarios por rol")
esquemaUsuarios.find({rol:"clientes"},function(err,esquemaUsuarios){
    if (err) return console.err(err);
    console.log(esquemaUsuarios)
})

esquemaUsuarios.find({rol:"Admin"},function(err,esquemaUsuarios){
    if (err) return console.err(err);
    console.log(esquemaUsuarios)
})


esquemaUsuarios.find({user:"jose",pass:"fgh456"},function(err,esquemaUsuarios){
    if (err) return console.err(err);
    console.log(esquemaUsuarios)
}

)



//Actualizaciones de informacion 
esquemaUsuarios.updateOne({user:"camilo"},{pass:"ultima actulizacion"}, function(err){
    if (err) return console.err(err); 
}

)





console.log("termino la ejecucion")



