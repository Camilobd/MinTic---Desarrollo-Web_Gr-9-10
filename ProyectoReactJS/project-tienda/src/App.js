import './App.css';
////import { Fragment } from 'react';

//importaciones con los componentes que voy a crear
import { SeccionHeader } from "./seccionHeader";
import { FormularioLogin } from "./seccionLogin";
//import { SeccionInfo } from "./seccionInfo";
//import { FormularioBienvenida } from "./seccionFormulario";

function App() {
  return (
    <>
      <SeccionHeader />
      <FormularioLogin/>
      

    </>


  );
}

export default App;
