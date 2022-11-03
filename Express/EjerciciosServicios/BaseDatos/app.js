var mongoose = require("mongoose");
const { updateOne } = require("./modelo/usuario.js");
var esquemaUsuarios = require ('./modelo/usuario.js')

mongoose.connect('mongodb://localhost:27017/TiendaIndustriales', { useNewUrlParser: true });

esquemaUsuarios.create({ user: "34", pass: "DATOPASS", rol: "DATOROL"}, function(err) {
    if (err) return console.error(err);
  });

  esquemaUsuarios.updateOne({user:"1"},{user:"usuarioaActualizado"},function (err){
    if (err) return console.error(err);
  })
 
esquemaUsuarios.find(function(err, esquemaUsuarios) {
    if (err) return console.error(err);
    console.log(esquemaUsuarios);
  });
