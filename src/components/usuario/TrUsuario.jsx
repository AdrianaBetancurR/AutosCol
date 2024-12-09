import React from 'react';

const TrUsuario = ({ usuario, crearUsuario }) => {
  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      <td>{usuario.telefono}</td>
      <td>
        <button onClick={() => crearUsuario(usuario)}>Editar</button> {/* Si tienes la función de edición */}
      </td>
    </tr>
  );
};

export default TrUsuario;
