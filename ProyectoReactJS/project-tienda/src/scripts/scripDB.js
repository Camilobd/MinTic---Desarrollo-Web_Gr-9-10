var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

//conectar
//crear la BD
//Crear la collecion

MongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("PruebaVSC")
    dbo.createCollection("ColeccionVSC", function (err, db) {
        if (err) throw err
        console.log("BD creada exitosamente")
    })
    db.Usuarios.find({"Rol":"Admin"});
});


