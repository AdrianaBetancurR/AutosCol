package com.autos.autospring.services;

import com.autos.autospring.models.Vehiculo;
import com.autos.autospring.repository.VehiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class VehiculoService {

    @Autowired
    private VehiculoRepository vehiculoRepository;

    /**
     * Obtiene todos los vehículos almacenados en la base de datos.
     *
     * @return Lista de vehículos.
     */
    public List<Vehiculo> obtenerTodosLosVehiculos() {
        return vehiculoRepository.findAll();
    }

    /**
     * Obtiene un vehículo por su ID.
     *
     * @param id ID del vehículo a buscar.
     * @return El vehículo encontrado, o null si no existe.
     */
    public Vehiculo obtenerVehiculoPorId(Long id) {
        Optional<Vehiculo> vehiculo = vehiculoRepository.findById(id);
        return vehiculo.orElse(null);
    }

    /**
     * Guarda un nuevo vehículo o actualiza uno existente.
     *
     * @param vehiculo El vehículo a guardar.
     * @return El vehículo guardado.
     */
    public Vehiculo guardarVehiculo(Vehiculo vehiculo) {
        return vehiculoRepository.save(vehiculo);
    }

    /**
     * Elimina un vehículo por su ID.
     *
     * @param id ID del vehículo a eliminar.
     */
    public void eliminarVehiculo(Long id) {
        vehiculoRepository.deleteById(id);
    }

    /**
     * Busca vehículos por su placa.
     *
     * @param placa Placa del vehículo a buscar.
     * @return Lista de vehículos que coinciden con la placa.
     */
    public List<Vehiculo> buscarPorPlaca(String placa) {
        return vehiculoRepository.findByPlacaContainingIgnoreCase(placa);
    }
}