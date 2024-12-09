import React, { useEffect, useState } from "react";
import axios from "axios";
import TrCelda from "./TrCelda";

const Table = ({ estado }) => {
  const [celdas, setCeldas] = useState([]);

  useEffect(() => {
    // Obtener las celdas desde el backend según el estado
    const url = estado
      ? "http://localhost:8080/celdas/disponibles" // Celdas disponibles
      : "http://localhost:8080/celdas/ocupadas"; // Celdas ocupadas

    axios
      .get(url)
      .then((response) => setCeldas(response.data))
      .catch((error) => console.error("Error al obtener las celdas:", error));
  }, [estado]);

  const actualizarCelda = (id, dataActualizada) => {
    // Actualiza una celda en el estado local
    setCeldas((prevCeldas) =>
      prevCeldas.map((celda) =>
        celda.id === id ? { ...celda, ...dataActualizada } : celda
      )
    );
  };

  return (
    <div>
      <h2>Celdas</h2>
      <table className="table">
        <thead>
          <tr>
            {/* Nueva columna para mostrar el ID de la celda */}
            <th>ID</th>
            <th>Estado</th>
            <th>Celda</th>
            <th>Placa</th>
            <th>Fecha Ingreso</th>
            <th>Hora Ingreso</th>
            <th>Fecha Salida</th>
            <th>Hora Salida</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {celdas.map((celda) => (
            <TrCelda key={celda.id} celda={celda} actualizarCelda={actualizarCelda} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
