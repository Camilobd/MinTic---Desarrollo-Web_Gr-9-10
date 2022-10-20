//Esta seccion esta construida apartir de gfragmentos react

import { Fragment } from "react";
import logo from './Recursos/icon.png';
//import logoIns from 'https://cdn-icons-png.flaticon.com/512/174/174855.png';
import './info.css';



export function SeccionInfo() {
    return (
        <Fragment>
            <div id="InfoPrincipal">

                <h3>Informacion de la tienda</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h4>Redes sociales</h4>
                <br></br>
                <img src={logo} className="App-logo" alt="logo" />
                
                <h5>intagram</h5>


            </div>



        </Fragment>



    );

}