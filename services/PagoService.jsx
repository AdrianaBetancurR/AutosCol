import { axiosConfig } from "../configurations/AxiosConfig";

// Obtener todos los pagos
const obtenerPagos = () => {
  return axiosConfig.get("/pagos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Crear un nuevo pago
const crearPago = (data = {}) => {
  return axiosConfig.post("/pagos", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Editar un pago existente
const editarPago = (id, data = {}) => {
  return axiosConfig.put(`/pagos/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Eliminar un pago
const eliminarPago = (id) => {
  return axiosConfig.delete(`/pagos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { obtenerPagos, crearPago, editarPago, eliminarPago };
