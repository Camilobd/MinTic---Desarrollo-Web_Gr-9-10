import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/login";
import { HomePage } from "./Components/HomeClientes";
import { CrearProductos } from "./Components/AdminCrearProductos";
import { ListaProductosAdmin } from "./Components/AdminListaProductos";
import { ListaVentas } from "./Components/AdminListaVentas";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Routes>
      <Route path="/HomeCliente" element={<HomePage/>} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/ListaProductos" element={<ListaProductosAdmin />} />
      <Route path="/NuevoProducto" element={<CrearProductos />} />
      <Route path="/ListaVentas" element={<ListaVentas />} />         
    </Routes>
  );
}
