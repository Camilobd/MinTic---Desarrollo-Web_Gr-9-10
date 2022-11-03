const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    user: String,
    pass: String,
    rol: String
  });

  module.exports= mongoose.model('usuarios',userSchema)