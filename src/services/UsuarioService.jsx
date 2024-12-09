import { axiosConfig } from "../src/configurations/AxiosConfig";

// Obtener usuarios
const obtenerUsuarios = () => {
  return axiosConfig.get("/usuarios", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Crear un nuevo usuario
const crearUsuario = (data = {}) => {
  return axiosConfig.post("/usuarios", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Editar un usuario existente
const editarUsuario = (id, data = {}) => {
  return axiosConfig.put(`/usuarios/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Eliminar un usuario
const eliminarUsuario = (id) => {
  return axiosConfig.delete(`/usuarios/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { obtenerUsuarios, crearUsuario, editarUsuario, eliminarUsuario };
