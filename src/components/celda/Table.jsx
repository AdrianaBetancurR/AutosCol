import React from 'react';

export default function Table({ celdas }) {
  const handleEliminar = (id) => {
    // Aquí puedes agregar la lógica para eliminar una celda usando el servicio de eliminación.
    console.log(`Eliminando celda con ID: ${id}`);
  };

  const handleEditar = (id) => {
    // Aquí puedes agregar la lógica para editar una celda.
    console.log(`Editando celda con ID: ${id}`);
  };

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Número</th>
            <th scope="col">Código</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {celdas.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">No hay celdas disponibles</td>
            </tr>
          ) : (
            celdas.map((celda) => (
              <tr key={celda.id}>
                <td>{celda.numero}</td>
                <td>{celda.codigo}</td>
                <td>
                  {celda.estado ? (
                    <span className="badge bg-success">Activo</span>
                  ) : (
                    <span className="badge bg-danger">Inactivo</span>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEditar(celda.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm ms-2"
                    onClick={() => handleEliminar(celda.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
