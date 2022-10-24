import { Component } from "react";
import '../styles/StyleTabla.css';

var heading = ['Usuario', 'Contraseña', 'Edad'];

//var heading = conexion a un BD NOsq o sql o un arcgivo plano

var body =
    [
    ['camilo.bohorquez', 'qwe123asd', '36'],
    ['jua.perez', 'zxc456fgh', '40'],
    ['jose.arias', 'mnbkjhiuy876', '56'],
 
    ];


export function TablaDatos() {

    return (
        <>
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
