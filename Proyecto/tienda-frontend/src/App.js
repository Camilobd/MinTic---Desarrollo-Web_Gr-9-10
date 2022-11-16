import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./Components/Index";
import { HomePage } from "./Components/HomeClientes";
import { CrearProductos } from "./Components/AdminCrearProductos";
import { ListaProductosAdmin } from "./Components/AdminListaProductos";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<HomePage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/ListaProductos" element={<ListaProductosAdmin />} />
      <Route path="/NuevoProducto" element={<CrearProductos />} />
      
    </Routes>
  );
}
