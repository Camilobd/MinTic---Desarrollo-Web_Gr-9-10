import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navegacion } from "./Componentes/Navegacion.js";
import { MenuNavegacion } from "./Componentes/NavMenu";

function App() {

  const [rol, setRol] = useState('admin')

  return (
    <>
    
      <BrowserRouter>
      

        <MenuNavegacion rol={rol} />
        <Navegacion rol={rol} />

      </BrowserRouter>

      

      

    </>


  );
}

export default App;
