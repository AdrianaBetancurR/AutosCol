import React from 'react';
import TrPago from './TrPago'; // Importa correctamente el componente de filas de la tabla

const Table = ({ pagos, realizarPago }) => {
  return (
    <div>
      <h3>Lista de Pagos</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Placa</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {pagos.length > 0 ? (
            pagos.map((pago) => (
              <TrPago key={pago.id} pago={pago} realizarPago={realizarPago} />
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay pagos registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
