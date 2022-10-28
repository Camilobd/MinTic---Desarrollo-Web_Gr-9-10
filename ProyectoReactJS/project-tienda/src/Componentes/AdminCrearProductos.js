import { Fragment } from "react";
import { useState } from "react";

import '../Estilos/Login.css';


export function CrearProdcutos() {

    const [data, setDate] = useState({
        ID: "",
        Nombre: "",
        Descripcion: "",
        Valor: "",
        Stock: ""


    }
    )


    return (

        <Fragment>
            <center>
                <div id="divProductos">
                    <h3>Crear Productos</h3>
                    <label>Nombre
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Nombre: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Descripcion
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Descripcion: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Cantidad
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Stock: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Valor Unitario
                        <input type="User" onChange={(e) => {
                            setDate({ ...data, Valor: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    
                    <button onClick={CrearUsuario} >Crear Stock</button>

                </div>
            </center>
        </Fragment>


    );

    function CrearUsuario() {

    }
}
