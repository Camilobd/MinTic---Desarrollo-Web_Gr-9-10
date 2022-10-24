import './App.css';
////import { Fragment } from 'react';

//importaciones con los componentes que voy a crear
import { SeccionHeader } from "./Components/seccionHeader.js";
import { FormularioLogin } from "./Components/seccionLogin.js";
import { TablaDatos } from "./Components/SeccionTabla.js";
//import { SeccionInfo } from "./seccionInfo";
//import { FormularioBienvenida } from "./seccionFormulario";

function App() {
  return (
    <>
      <SeccionHeader />
      <FormularioLogin/>
      <TablaDatos/>     

    </>


  );
}

export default App;
