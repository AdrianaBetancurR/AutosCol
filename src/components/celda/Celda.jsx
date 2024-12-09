import React, { useState } from 'react';
import Toggle from './Toggle';
import Table from './Table';

export default function Celda() {
  const [estado, setEstado] = useState(true); // true para mostrar celdas disponibles, false para ocupadas

  const cambiarEstado = () => {
    setEstado(!estado);
  };

  return (
    <div>
      <Toggle cambiarEstado={cambiarEstado} estado={estado} />
      <Table estado={estado} />
    </div>
  );
}
