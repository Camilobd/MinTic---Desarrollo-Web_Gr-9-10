//correo electronico 
//cedula - valaidacion desde los inputs de los dos tipos de datos

import { Fragment } from "react";
import { useState } from "react";

import './StylesLogin.css';

export function FormularioLogin() {

    const [data, setDate] = useState({
        email: "",
        docIdentidad: 0,
        pass: ""
    }
    )


    return (

        <Fragment>
            <center>
                <div id="divLogin">
                    <h3>Login</h3>
                    <label>Email
                        <input type="email" onChange={(e) => {
                            //console.log(e.target.value);
                            setDate({ ...data, email: e.target.value })
                        }
                        } ></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>Documentode Identidad
                        <input type="number" onChange={(e) => {
                            setDate({ ...data, docIdentidad: e.target.value })
                        }
                        }></input>
                    </label>
                    <br></br>
                    <br></br>
                    <label>contraseña
                        <input type="password" onChange={(e) => {

                            setDate({ ...data, pass: e.target.value })
                        }



                        }>


                        </input>


                    </label>
                    <br></br>
                    <br></br>
                    <button onClick={VerInfo} >verificar Info</button>
                    <button onClick={CancelarInformacion}>Descubrir contraseña</button>
                </div>
            </center>
        </Fragment>


    );

    function VerInfo() {

        ///alert("email escrito"+data.email);
        var emailMongo = "camilo.bohorquez@mintic.gov.co";
        var ccMongo = 1098;

        // eslint-disable-next-line eqeqeq
        if (emailMongo === data.email && ccMongo == data.docIdentidad) {
            alert("El usuario ingresado es correcto")
        } else {
            alert("Por favor verifique los datos ingresados")
        }

        /*
        funcaion de comparacion con datos que salen de una BD
        func(data.email, data.documento){
            datos que recuero de mongo
            if email form == email de nmongo
        }


        */

    }

    function CancelarInformacion() {

        alert("La contraseña escrita es:" + data.pass)


    }
}
