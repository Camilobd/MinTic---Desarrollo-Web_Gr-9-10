//correo electronico 
//cedula - valaidacion desde los inputs de los dos tipos de datos

import { Fragment } from "react";
import './StylesLogin.css';

export function FormularioLogin() {
    return (

        <Fragment>
            <center>
            <div id="divLogin">
                <h3>Login</h3>
                <label>Email
                    <input type="email"></input>
                </label>
                <br></br>
                <br></br>
                <label>Documentode Identidad
                    <input type="number"></input>
                </label>
                <br></br>
                <br></br>
                <button onClick={VerInfo} >verificar Info</button>
                <button onClick={CancelarInformacion}>cancelar Info</button>
            </div>
            </center>
        </Fragment>


    );

    function VerInfo() {
        
       alert("DATOS CORRECTOS");
        
    }

    function CancelarInformacion() {
        
        alert("La operacion fue cancelada por el usuario")
    }
}
