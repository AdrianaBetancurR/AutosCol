import { axiosConfig } from "../src/configurations/AxiosConfig";

// Obtener lista de vehículos
const obtenerVehiculos = (estado = true) => {
  return axiosConfig.get("/vehiculos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Crear un nuevo vehículo
const crearVehiculo = (data = {}) => {
  return axiosConfig.post("/vehiculos", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Editar un vehículo existente
const editarVehiculo = (id, data = {}) => {
  return axiosConfig.put(`/vehiculos/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Eliminar un vehículo
const eliminarVehiculo = (id) => {
  return axiosConfig.delete(`/vehiculos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { obtenerVehiculos, crearVehiculo, editarVehiculo, eliminarVehiculo };
