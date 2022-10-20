import React from 'react';
import ReactDOM from 'react-dom/client';

//importaciones 

import { SeccionMenu } from "./Secciones";
import { SeccionNoticas } from "./SeccionNoticas";
import { SeccionFromulario } from "./SeccionFormulario";


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    
    <SeccionNoticas />
    <SeccionFromulario />
    <SeccionMenu />
    
  </React.StrictMode>
);

