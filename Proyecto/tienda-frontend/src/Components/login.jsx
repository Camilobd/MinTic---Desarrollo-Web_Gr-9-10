import { Fragment } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


import JsonData from "../data/UsuariosEjemplo.json";

export function LoginPage() {

  const [data, setDate] = useState({
    user: "",
    pass: "",
    rol: ""
  }
  )

  const [url, setURL] = useState("");


  return (

    <Fragment>

      <center>
        <div id="divLogin">
          <h3>Ingreso - Venta - Productos industriales</h3>
          <label>Usuario
            <input type="text" onChange={(e) => {
              setDate({ ...data, user: e.target.value })
            }
            } ></input>
          </label>
          <br></br>
          <br></br>
          <label>Contraseña
            <input type="pass" onChange={(e) => {
              setDate({ ...data, pass: e.target.value })
            }} ></input>
          </label>
          <br></br>
          <br></br>
          <Link to={url}>
            <button onClick={VerInfo}>Ingresar</button>
          </Link>

        </div>
      </center>
    </Fragment>


  );

  function Validacion(usuarioNombre, contrasena) {

    var rol = "";
    var datos = JsonData; //Integra o con express o con mongoDb   


    for (const usuario of datos) {
      if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
        rol=usuario.Rol
      }
    }
    return rol;
  }



  function VerInfo() {


console.log(Validacion(data.user, data.pass));
    // eslint-disable-next-line eqeqeq
    if (Validacion(data.user, data.pass)==="Admin") {
      setURL("/ListaProductos")

    } else if (Validacion(data.user, data.pass)==="Cliente") {
      setURL("/HomeCliente")
    }else{
      alert("Los datos son incorrectos")
    }
  }
}


