import { useMemo } from "react";
//import { useTable } from "react-table";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Usuario",
       accessor: "user"
     },
     
     {
       Header: "Contraseña",
       accessor: "pass"
     },
     {
       Header: "Edad",
       accessor: "edad"
     }
   ],
   []
 );

 return columns;
}
