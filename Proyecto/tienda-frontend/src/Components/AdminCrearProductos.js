import { Fragment, useState } from "react";
import { MenuAdmin } from "./menuPrincipalAdmin";


export function CrearProductos() {

    const [data, setData] = useState({
        id: "PRO-",
        nombre: "",
        stock: "",
        descripcion: "",
        valor: "",
        imagen: "https://img.directindustry.es/images_di/photo-m2/12569-12705090.jpg"
    }
    )

    return (
        <Fragment>
            <div>
            <div><MenuAdmin/></div>
                <h3>Crear nuevos productos</h3>
                <label> Codigo
                    <input type="number" onChange={(e) => {
                        setData({ data, id: e.target.value })
                    }} ></input>
                </label>
                <br></br>
                <br></br>
                <label> Nombre Producto
                    <input type="text" onChange={(e) => {
                        setData({ ...data, nombre: e.target.value })
                    }} ></input>
                </label>
                <br></br>
                <br></br>
                <label> Descripcion del  Producto
                    <input type="text" onChange={(e) => {
                        setData({ ...data, descripcion: e.target.value })
                    }} ></input>
                </label>
                <br></br>
                <br></br>
                <label> Cantidad
                    <input type="number" onChange={(e) => {
                        setData({ ...data, stock: e.target.value })
                    }} ></input>
                </label>
                <br></br>
                <br></br>
                <label> Valor Unitarios
                    <input type="number" onChange={(e) => {
                        setData({ ...data, valor: e.target.value })
                    }} ></input>
                </label>
                <br></br>
                <br></br>
                <button onClick={CrearProductosNUevos} >Crear producto nuevo</button>

            </div>


        </Fragment>



    );

    function CrearProductosNUevos() {
        
        const datosJSON = JSON.stringify(data)       
        

        fetch("http://localhost:5000/GuardarProducto", {
            method: "POST",
            body: datosJSON,
            headers: {
                "Content-Type": "application/json",
            },

        })

        //Comprobacion  de los datos
        
        alert("Datos almacenados correctamente")
    }



}