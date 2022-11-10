import { Component, useState } from "react";
import '../Estilos/Tabla.css';

var heading = ['Id Producto', 'Nombre Producto','Stock','Descripcion Producto', 'Valor Unitario','Stock'];

//var body = conexion a un BD NOsq o sql o un arcgivo plano


var body =
    [
    ['PI-0001', 'Guantes', 'Unidades dependiendo de tallas','3600','200'],
    ['PI-0002', 'Barrilla', 'Tamaños de 6 metros y define las pulagas','400000','3000'],
    ['PI-0003', 'Brea','Brea sintetica por 6 kg', '56000','40'],
 
    ];


export function ListaProductosAdmin() {

    return (
        <>
            <h3>LISTA DE PRODUCTOS</h3>
            <br></br>
            <div >
                <Table heading={heading} body={body} />
            </div>
        </>
    );

}

class Table extends Component {
    render() {

       //Vector y formatearlos para que react los conozca y los trate coomo un map
       //Map Coleecion no lineal

        var heading = this.props.heading;
        var body = this.props.body;
        
        return (
            <div id="datagrid">
                <table>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody>
            </table>


            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}