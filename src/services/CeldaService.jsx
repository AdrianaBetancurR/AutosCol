import { axiosConfig } from "../configurations/AxiosConfig";

// Obtener las celdas (puedes añadir filtros como estado, si lo necesitas)
const obtenerCeldas = (estado=true) => {
  return axiosConfig.get("v1/celdas?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Crear una nueva celda
const crearCelda = (data = {}) => {
  return axiosConfig.post("v1/celdas", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Editar una celda existente
const editarCelda = (id, data = {}) => {
  return axiosConfig.put("v1/celdas/" + id, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Eliminar una celda
const eliminarCelda = (id) => {
  return axiosConfig.delete("v1/celdas/" + id, {}, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { obtenerCeldas, crearCelda, editarCelda, eliminarCelda };
