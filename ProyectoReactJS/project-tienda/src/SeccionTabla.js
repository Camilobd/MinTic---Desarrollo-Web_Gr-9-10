import { Component } from "react";
import './StyleTabla.css';

var heading = ['Usuario', 'Contraseña', 'Edad'];
var body =
    [['camilo.bohorquez', 'qwe123asd', '36'],
    ['jua.perez', 'zxc456fgh', '40'],
    
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
        var heading = this.props.heading;
        var body = this.props.body;
        return (
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
