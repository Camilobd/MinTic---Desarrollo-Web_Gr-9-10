const mongoose= require("mongoose");


const usuarioSchema = mongoose.Schema({
    user: String,
    pass: String,
    rol: String
}

);

module.exports= mongoose.model('usuarios',usuarioSchema)

