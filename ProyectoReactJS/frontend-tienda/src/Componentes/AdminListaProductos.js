import { useState, useEffect } from "react";

export const ListaProductosAdmin = () => {

    const [dataProductos, setDataProductos] = useState([]);

    useEffect(() => {
        getData();
    }, [])


    function getData() {
        fetch("http://localhost:5000/ProductosStock")
            .then((resp) => resp.json())
            .then((resp) => {
                return setDataProductos(resp)
            })
            .catch((err) => console.log(err));
    }

    return (

        <div className="container mt-5" align="center">
            <h2> Lista de productos completos</h2>

            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <td>ID </td>
                        <td>NOMBRE PRODUCTO </td>
                        <td>DESCRIPCION PRODUCTO </td>
                        <td>CANT INVENTARIO</td>
                        <td>VALOR UNITARIO </td>
                        <td>IMAGEN </td>
                    </tr>
                </thead>
                <tbody>
                    {dataProductos.map((Producto) => (
                        <tr key={Producto.id}>
                            <td>{Producto.id}</td>
                            <td>{Producto.nombre}</td>
                            <td>{Producto.descripcion}</td>
                            <td>{Producto.stock}</td>
                            <td>{Producto.valor}</td>
                            <td><img src={Producto.imagen} width={100}></img></td>
                            <td> <button>MODIFICAR PRODUCTOS</button> </td>
                        </tr>
                    ))}

                </tbody>
            </table>








        </div>



    )




}
