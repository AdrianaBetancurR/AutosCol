import React from 'react';

export default function Toggle({ cambiarEstado, estado }) {
  return (
    <div className="mb-3 form-check form-switch">
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
        Mostrar Celdas {estado ? 'Activas' : 'Inactivas'}
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        checked={estado}
        onChange={cambiarEstado}
      />
    </div>
  );
}
