import { Fragment } from "react";
import { useState } from "react";



import '../Estilos/Login.css';

export function CrearUsuarios() {

    const [data, setDate] = useState({
        user: "",
        pass: "",
        mail: "",
        name: "",
        rol: ""


    }
    )


    return (

        <Fragment>
            <center>
                <div id="divLogin">
                    <h3>Crear Usuarios</h3>
                    <label>Nombre
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, name: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Correo Electronico
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, email: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Rol
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, rol: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
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
                    <button onClick={CrearUsuario} >Crear Usuario</button>

                </div>
            </center>
        </Fragment>


    );

    function CrearUsuario() {

    }
}
