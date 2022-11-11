import React from 'react'

export const Table = ({ productos = []}) => {
  return (

    <table className="table table-striped">
          <thead>
            <tr>
              <td>Nombre Producto</td>
              <td>Descripcion Producto</td>
              <td>Stock</td>
              <td>Valor Unitario</td>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {productos.map((productos) => (
              <tr key={productos.id}>
                <td>{productos.nombre}</td>
                <td>{productos.descripcion}</td>
                <td>{productos.stock}</td>
                <td>{productos.valor}</td>
              </tr>
            ))}
          </tbody>
    </table>
  )
}
