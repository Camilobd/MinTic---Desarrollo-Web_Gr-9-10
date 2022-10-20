import React from 'react';
import ReactDOM from 'react-dom/client';

//importaciones con los componentes que voy a crear
import { SeccionHeader } from "./seccionHeader";
import { SeccionInfo } from "./seccionInfo";
import { FormularioBienvenida } from "./seccionFormulario";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SeccionHeader />
    
    <FormularioBienvenida/>    
    <SeccionInfo />
    
    
  </React.StrictMode>
);


