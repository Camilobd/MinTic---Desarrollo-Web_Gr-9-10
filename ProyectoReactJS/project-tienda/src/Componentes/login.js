import { Fragment } from "react";
import { useState } from "react";



import '../Estilos/Login.css';

export function Login() {

    const [data, setDate] = useState({
        user: "",
        pass: ""
    }
    )


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
                        <input type="Pass" onChange={(e) => {
                            setDate({ ...data, pass: e.target.value })
                        }
                        }>
                        </input>
                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={VerInfo} >Ingresar</button>

                </div>
            </center>
        </Fragment>


    );

    function VerInfo() {

        ///alert("email escrito"+data.email);
        var userMongo = "camilo.bohorquez@mintic.gov.co";
        var passMongo = 1098;

        // eslint-disable-next-line eqeqeq
        if (userMongo === data.user && passMongo == data.pass) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }
    }
}
