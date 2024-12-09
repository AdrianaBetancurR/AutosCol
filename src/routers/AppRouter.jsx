import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";
import Celdas from "../components/celda/Celda";
import Pagos from "../components/pago/Pago";
import Usuarios from "../components/usuario/Usuario";
import Vehiculo from "../components/vehiculo/Vehiculo"; 
import NotFound from "../components/ui/NotFound";

export default function AppRouter() {
  console.log("Rutas configuradas");

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Celdas />} />
          <Route path="/celdas" element={<Celdas />} />
          <Route path="/pagos" element={<Pagos />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/vehiculos" element={<Vehiculo />} /> {/* Asegúrate de que esta ruta esté correcta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
