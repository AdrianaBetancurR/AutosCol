import React from 'react';

const TrPago = ({ pago, realizarPago }) => {
  if (!pago || !pago.usuario || !pago.vehiculo) {
    return (
      <tr>
        <td colSpan="5">Error: No se pudo cargar el pago correctamente</td>
      </tr>
    );
  }

  const { id, usuario, monto, vehiculo, fechaPago } = pago;

  return (
    <tr>
      <td>{id}</td>
      <td>{usuario?.nombre || "Nombre no disponible"}</td> {/* Nombre del usuario */}
      <td>{vehiculo?.placa|| "Marca no disponible"}</td> {}
      <td>{monto}</td>
      <td>{fechaPago}</td>
      <td>
        <button
          onClick={() => realizarPago(id)}
          style={{
            backgroundColor: '#28a745', // Verde para indicar acción positiva
            color: 'white',
            padding: '5px 10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Realizar Pago
        </button>
      </td>
    </tr>
  );
};

export default TrPago;
