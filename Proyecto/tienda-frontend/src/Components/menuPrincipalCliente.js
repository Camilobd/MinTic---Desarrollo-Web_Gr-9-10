
import React from "react";
import { Link } from "react-router-dom";


export function MenuCliente() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/ListaProductosCliente"}>Lista productos</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to={"/Carrito"}>CarritoCompras
            </Link>
          </li>
        </ul>
      </div>
    </nav>

  )

} 