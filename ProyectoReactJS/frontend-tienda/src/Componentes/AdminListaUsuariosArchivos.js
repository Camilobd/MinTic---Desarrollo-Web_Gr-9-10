import JsonData from "../data/UsuariosEjemplo.json";
import { React, useState } from "react";



export function ListaUsuarios(){
    const DisplayData=JsonData.map(
        (info)=>{                   
            return(
                <tr>
                    <td>{info.user}</td>
                    <td>{info.pass}</td>
                    <td>{info.Rol}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                    <th>Rol</th>
                    </tr>
                </thead>
                <tbody> 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 