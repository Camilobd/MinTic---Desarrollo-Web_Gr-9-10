const mongoose= require("mongoose");

const productosScheme = mongoose.Schema({
    id: String,
    nombre: String,
    stock:  String,
    descripcion: String,
    valor: String,
    imagen: String
})

module.exports = mongoose.model('productos',productosScheme)