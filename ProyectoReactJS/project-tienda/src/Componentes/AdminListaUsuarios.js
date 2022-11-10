import { useEffect, useState } from "react";
import { Table } from "../Componentes/Table";

export const ListaUsuarios = () => {


  const [dataBooks, setDataBooks] = useState([]);
  


  const getData = () => {
    try {
      fetch("http://localhost:5000/Productos")
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.data) {
            setDataBooks(resp.data);
          }
        })
        .catch((err) => console.log(err));        
    } catch (err) {
      console.log(err);
    }
  };

 

  return (
    

      <div className="row mt-5">
        <Table books={dataBooks} />
      </div>
   
  );
};
