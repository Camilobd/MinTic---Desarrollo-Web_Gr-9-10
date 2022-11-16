import { Fragment } from "react";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";


import JsonData from "../data/UsuariosEjemplo.json";




export function LoginPage() {

  const [data, setDate] = useState({
    user: "",
    pass: "",
    date: ""
  }
  )

  const [url, setURL] = useState("");


  return (

    <Fragment>

      <center>
        <div id="divLogin">
          <h3>Ingreso - Venta - Productos industriales</h3>
          <label>Usuario
            <input type="User" onChange={(e) => {
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
            <button onClick={VerInfo}>ir</button>
          </Link>
          
        </div>
      </center>
    </Fragment>


  );

  function Validacion(usuarioNombre, contrasena) {

    var decision = false;
    var datos = JsonData; //Integra o con express o con mongoDb   


    for (const usuario of datos) {
      if (usuarioNombre === usuario.user && contrasena === usuario.pass) {
        decision = true;
      }
    }
    return decision;
  }



  function VerInfo() {

     // eslint-disable-next-line eqeqeq
    if (Validacion(data.user, data.pass)) {
      setURL("/ListaProductos")

    } else {
      alert("Datos incorrectos")
    }
    console.log("mostrar info: " + url)
  }
}


