import React from 'react';
import TrUsuario from './TrUsuario'; // Importa correctamente el componente de filas de la tabla

const Table = ({ usuarios, crearUsuario }) => {
  return (
    <div>
      <h3>Lista de Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <TrUsuario key={usuario.id} usuario={usuario} crearUsuario={crearUsuario} />
            ))
          ) : (
            <tr>
              <td colSpan="5">No hay usuarios registrados</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
