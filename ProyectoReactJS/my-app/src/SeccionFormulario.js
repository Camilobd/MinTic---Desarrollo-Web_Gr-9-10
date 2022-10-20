import { Fragment } from "react";
import './SeccionFormulario.css';

export function SeccionFromulario() {
    return (
        <>
            <div class="form">
                <div class="title">Welcome</div>
                <div class="subtitle">Let's create your account!</div>
                
                <div class="input-container ic1">
                    <input id="firstname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="firstname" class="placeholder">Nombre</label>
                </div>


                <div class="input-container ic2">
                    <input id="lastname" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="lastname" class="placeholder">Apellido</label>
                </div>

                <div class="input-container ic2">
                    <input id="email" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">email</label>

                </div>
                <button type="text" class="submit">cargar informacion</button>
            </div>



        </>

        



    );
}



