import React, { useEffect, useState } from 'react';
import { crearCelda, obtenerCeldas } from '../../services/CeldaService';

import Table from './Table';
import Error from './Error';
import Toggle from './Toggle';

export default function Celdas() {
  const [celdas, setCeldas] = useState([]);
  const [estado, setEstado] = useState(true);
  const [error, setError] = useState(false);
  const [celda, setCelda] = useState({
    numero: '',
    codigo: '',
    vehiculos: [],
    estado: true
  });

  useEffect(() => {
    obtenerTodos();
  }, [estado]);

  const obtenerTodos = async () => {
    try {
      const { data } = await obtenerCeldas(estado);
      setCeldas(data);
      if (error) {
        setError(false);
      }
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  const cambiarEstado = () => {
    setEstado(!estado);
  };

  const handleChange = (e) => {
    setCelda({
      ...celda,
      [e.target.name]: e.target.value
    });
  };

  const guardar = async (e) => {
    e.preventDefault();
    try {
      const resp = await crearCelda(celda);
      obtenerTodos();
      setCelda({
        numero: '',
        codigo: '',
        vehiculos: [],
        estado: true
      });
      setEstado(true);
      console.log(resp);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Toggle cambiarEstado={cambiarEstado} estado={estado} />
      {error ? <Error /> : <Table celdas={celdas} />}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@fat"
      >
        Agregar Celda
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Nueva Celda</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={guardar}>
                <div className="mb-3">
                  <label htmlFor="numero" className="col-form-label">Número:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numero"
                    name="numero"
                    value={celda.numero}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="codigo" className="col-form-label">Código:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="codigo"
                    name="codigo"
                    value={celda.codigo}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={celda.numero.length === 0 || celda.codigo.length === 0}
                >
                  Guardar
                </button>
              </form>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </>
  );
}
