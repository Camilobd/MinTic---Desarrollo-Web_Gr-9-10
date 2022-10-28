import './App.css';

import { Login } from "./Componentes/login.js";
import { ListaProductosUsuario } from "./Componentes/userListaProductos.js";
import { CarritoCompras } from "./Componentes/userCarrito.js";
import { CrearUsuarios } from "./Componentes/AdminCrearUsuarios.js";
import { CrearProdcutos } from "./Componentes/AdminCrearProductos.js";
import { ListaProductosAdmin } from "./Componentes/AdminListaProductos";
import { ListaVentas } from "./Componentes/AdminListaVentas.js";
import { ListaUsuarios } from "./Componentes/AdminListaUsuarios.js";


function App() {
  return (
    <>
      
      <Login/>
      <br></br>
      <ListaProductosUsuario/>
      <br></br>
      <CarritoCompras/>
      <br></br>
      <CrearUsuarios/>
      <br></br>
      <CrearProdcutos/>
      <br></br>
      <ListaProductosAdmin/>
      <br></br>
      <ListaVentas/>
      <br></br>
      <ListaUsuarios/>
          

    </>


  );
}

export default App;
