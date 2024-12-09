import React, { useState } from "react";
import axios from "axios";

export default function TrCelda({ celda, actualizarCelda }) {
  const { id, numero, vehiculos, fechaIngreso, horaIngreso, fechaSalida, horaSalida, estado } = celda;

  const [modoEdicion, setModoEdicion] = useState(false);
  const [datosEditados, setDatosEditados] = useState({
    estado: estado || "DISPONIBLE",
    fechaIngreso: fechaIngreso || "",
    horaIngreso: horaIngreso || "",
    fechaSalida: fechaSalida || "",
    horaSalida: horaSalida || "",
  });

  const toggleEdicion = () => {
    setModoEdicion(!modoEdicion);
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosEditados({ ...datosEditados, [name]: value });
  };

  const guardarCambios = () => {
    axios
      .put(`http://localhost:8080/celdas/${id}`, {
        ...celda,
        ...datosEditados,
      })
      .then(() => {
        actualizarCelda(id, datosEditados);
        setModoEdicion(false);
      })
      .catch((error) => console.error("Error al actualizar la celda:", error));
  };

  return (
    <tr>
      {/* Columna para mostrar el ID de la celda */}
      <td>{id}</td>

      {/* Columna para mostrar el estado de la celda */}
      <td style={{ color: estado === "DISPONIBLE" ? "green" : "red" }}>
        {modoEdicion ? (
          <select
            name="estado"
            value={datosEditados.estado}
            onChange={manejarCambio}
          >
            <option value="DISPONIBLE">Disponible</option>
            <option value="OCUPADA">Ocupada</option>
          </select>
        ) : (
          <span>{estado === "DISPONIBLE" ? "Disponible" : "Ocupada"}</span>
        )}
      </td>

      {/* Columna para mostrar el número de la celda */}
      <td>{numero}</td>

      {/* Columna para mostrar la placa del vehículo */}
      <td>{vehiculos?.[0]?.placa || "N/A"}</td>

      {modoEdicion ? (
        <>
          {/* Campos para edición de fechas y horas */}
          <td>
            <input
              type="date"
              name="fechaIngreso"
              value={datosEditados.fechaIngreso}
              onChange={manejarCambio}
            />
          </td>
          <td>
            <input
              type="time"
              name="horaIngreso"
              value={datosEditados.horaIngreso}
              onChange={manejarCambio}
            />
          </td>
          <td>
            <input
              type="date"
              name="fechaSalida"
              value={datosEditados.fechaSalida}
              onChange={manejarCambio}
            />
          </td>
          <td>
            <input
              type="time"
              name="horaSalida"
              value={datosEditados.horaSalida}
              onChange={manejarCambio}
            />
          </td>
          <td>
            <button onClick={guardarCambios}>Guardar</button>
            <button onClick={toggleEdicion}>Cancelar</button>
          </td>
        </>
      ) : (
        <>
          {/* Muestra los valores actuales cuando no está en modo edición */}
          <td>{datosEditados.fechaIngreso || "N/A"}</td>
          <td>{datosEditados.horaIngreso || "N/A"}</td>
          <td>{datosEditados.fechaSalida || "N/A"}</td>
          <td>{datosEditados.horaSalida || "N/A"}</td>
          <td>
            <button
              onClick={toggleEdicion}
              style={{
                backgroundColor: "#007bff", // Azul
                color: "white",
                padding: "5px 10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Editar
            </button>
          </td>
        </>
      )}
    </tr>
  );
}
