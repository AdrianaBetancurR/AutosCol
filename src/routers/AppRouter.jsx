import React from "react";
import { Routes } from "react-router-dom";
import Navbar from "../ig/Navbar";
import Footer from "../ig/Footer";
import Celdas from "../components/celda/Celda";
import NotFound from "../ig/NotFound";  // Para rutas no encontradas

export default function AppRouter() {
  return (
    <>
      <div className="container">
        <Navbar /> {/* Barra de navegación */}
        <Routes>
          <Routes path="/" element={<Celdas />} /> {/* Ruta principal */}
          <Routes path="/celdas" element={<Celdas />} /> {/* Ruta para ver las celdas */}
          <Routes path="*" element={<NotFound />} /> {/* Ruta para cuando no se encuentra una ruta */}
        </Routes>
      </div>
      <Footer /> {/* Pie de página */}
    </>
  );
}
