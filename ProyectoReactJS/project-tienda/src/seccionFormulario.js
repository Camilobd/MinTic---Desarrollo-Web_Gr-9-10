//esta componente va a tener los elementos necesarios para hacer un formulario
import './StyleFormulario.css';
import { useState } from "react";


export function FormularioBienvenida() {
   //Estado y funcion de modificaicon de estado en el arreglo
   //estado inicial 
   const [data,setData] = useState({
        user:"", pasword:"", edad:0
    });

    return (
        <>
            <center>
                <div id="formPersonas">
                    <h2> Formulario de Bienvenida </h2>
                    <label>
                        User:
                        <input type="text" name="name" onChange={(e)=>{ 
                            console.log(e.target.value)
                            
                            setData({...data,user:e.target.value})

                        }} />
                    </label>
                    <p>Pasword </p>
                    <input type="password"  />
                    <p>Edad </p>
                    <input type="number" />
                    <br></br>
                    <br></br>
                    <button onClick={DatosGenerales}>Guardar Usuario</button>
                </div>
            </center>
        </>
    );

    function DatosGenerales() {
        alert(data.user+"   --- "+data);       
    
    }
}