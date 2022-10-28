import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./Componentes/login.js";
import { ListaProductosUsuario } from "./Componentes/userListaProductos.js";
import { CarritoCompras } from "./Componentes/userCarrito.js";
import { CrearUsuarios } from "./Componentes/AdminCrearUsuarios.js";
import { CrearProdcutos } from "./Componentes/AdminCrearProductos.js";
import { ListaProductosAdmin } from "./Componentes/AdminListaProductos";
import { ListaVentas } from "./Componentes/AdminListaVentas";



export const Navigation = ({ rol }) => {
  return (
    <Routes>
      {rol === "admin" ? (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/CrearProductos" element={<CrearProdcutos />} />
          <Route path="/CrearUsuarios" element={<CrearUsuarios />} />
          <Route path="/ListaProductosAdmin" element={<ListaProductosAdmin />} />
          <Route path="/ListaVentas" element={<ListaVentas />} />
          
        </Fragment>
      ) : (
        <Fragment>
          <Route path="/" element={<Login />} />
          <Route path="/ListaProductosUsuario" element={<ListaProductosUsuario />} />
          <Route path="/CarritoCompras" element={<CarritoCompras />} />
        </Fragment>
      )}
    </Routes>
  );
};