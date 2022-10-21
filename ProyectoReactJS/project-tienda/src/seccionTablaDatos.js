import { useTable } from "react-table";
import useRows from "./datos/cabecera.js";
import useColumns from "./datos/data.js";

const columns = useColumns;
const data = useRows;
const table = useTable;


const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
} = table;




export function InfoTablas() {
    return (
        <>
            


        </>
    );

}