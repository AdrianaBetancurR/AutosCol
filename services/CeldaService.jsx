import { axiosConfig } from "../src/configurations/AxiosConfig";

const obtenerCeldas = (estado = true) => {
  return axiosConfig.get("/celdas", {  // Corrección aquí: falta cerrar el endpoint "/celdas"
    headers: {
      "Content-Type": "application/json",
    },
  });
};


// Crear una nueva celda
const crearCelda = (data = {}) => {
  return axiosConfig.post("/celdas", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Editar una celda existente
const editarCelda = (id, data = {}) => {
  return axiosConfig.put(`/celdas/${id}`, data, {  // Asegúrate de que la URL sea correcta
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Eliminar una celda
const eliminarCelda = (id) => {
  return axiosConfig.delete(`/celdas/${id}`, { 
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { obtenerCeldas, crearCelda, editarCelda, eliminarCelda };
