const express= require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.get('/',( req , res ) =>{
    // Obetener informacion de la BD
    // Devolver la lista de productos Admin como para cliente
    res.send("Hola mundo")
})


app.post('/',( req , res ) =>{
    const {user, pass, Rol}= req.body
    console.log(user+" "+pass+""+Rol);

    const nameService="Micah"
    const passService="MWS37NUY9VG"
    var respuesta=""

    if (nameService === user && passService == pass) {
        respuesta = {role:Rol}
    } else{
        respuesta = {role:"SinRol"}
    }

    res.send(respuesta)
    
})

app.get('/:IVA/:precio/:tipo',( req , res ) =>{

    const {IVA, precio, tipo}=req.params
    var nueva=0;
    nueva=parseInt(precio)*parseInt(IVA)*parseInt(tipo)
    const result= {oper:nueva}
 
    res.send(result)
})



app.listen(port, () =>{
    console.log("Mi aplicacasdion se esta ejecutando en el puerto "+port)
})

