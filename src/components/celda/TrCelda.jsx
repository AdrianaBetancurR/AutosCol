import React from 'react';

export default function TrCelda({ celda, cambiarEstadoCelda }) {
  const { id, numero, codigo, vehiculos } = celda;

  const handleChangeEstado = () => {
    cambiarEstadoCelda(id, !estado); // Cambiar el estado de la celda
  };

  return (
    <tr>
      <td>{numero}</td>
      <td>{codigo || 'Sin código'}</td>
      <td>
        {/* Mostrar los vehículos asociados a la celda */}
        {vehiculos && vehiculos.length > 0 ? (
          <ul>
            {vehiculos.map((vehiculo, index) => (
              <li key={index}>{vehiculo.modelo}</li> // Cambia 'modelo' por el campo adecuado en tu clase Vehiculo
            ))}
          </ul>
        ) : (
          <span>No hay vehículos</span>
        )}
      </td>
      <td>
        <button 
          className={`btn ${estado ? 'btn-warning' : 'btn-success'}`} 
          onClick={handleChangeEstado}
        >
          {estado ? 'Desactivar' : 'Activar'}
        </button>
      </td>
    </tr>
  );
}
