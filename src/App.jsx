import Carrito from "./components/Carrito";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Vestimenta from "./pages/Vestimenta";
import { Routes, Route } from "react-router-dom";
import ProductoDetalle from "./pages/ProductoDetalle";
import Footer from "./components/Footer";
import Tecnologia from "./pages/Tecnologia";


function App() {
 
  // Renderizado y Estructura

  return (
    <>
      <Header />
      <Carrito />
      <Routes>
        <Route path="/pages/Inicio" element={<Inicio />} />
        <Route path="/pages/vestimenta" element={<Vestimenta />} />
        <Route path="/pages/tecnologia" element={<Tecnologia />} />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;