package com.autos.autospring.controller;

import com.autos.autospring.models.Vehiculo;
import com.autos.autospring.services.VehiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehiculo")
public class vehiculoController {

    @Autowired
    private VehiculoService vehiculoService;

    /**
     * Obtiene todos los vehículos.
     *
     * @return Lista de vehículos.
     */
    @GetMapping
    public ResponseEntity<List<Vehiculo>> obtenerTodosLosVehiculos() {
        List<Vehiculo> vehiculos = vehiculoService.obtenerTodosLosVehiculos();
        return ResponseEntity.ok(vehiculos);
    }

    /**
     * Obtiene un vehículo por su ID.
     *
     * @param id ID del vehículo.
     * @return Vehículo encontrado o un mensaje de error si no existe.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Object> obtenerVehiculoPorId(@PathVariable Long id) {
        Vehiculo vehiculo = vehiculoService.obtenerVehiculoPorId(id);
        if (vehiculo != null) {
            return ResponseEntity.ok(vehiculo);
        } else {
            return ResponseEntity.status(404).body("El vehículo con ID " + id + " no fue encontrado.");
        }
    }

    /**
     * Crea un nuevo vehículo.
     *
     * @param vehiculo Objeto Vehículo a crear.
     * @return Vehículo creado.
     */
    @PostMapping
    public ResponseEntity<Vehiculo> crearVehiculo(@RequestBody Vehiculo vehiculo) {
        Vehiculo nuevoVehiculo = vehiculoService.guardarVehiculo(vehiculo);
        return ResponseEntity.status(201).body(nuevoVehiculo);
    }

    /**
     * Actualiza un vehículo existente.
     *
     * @param id       ID del vehículo a actualizar.
     * @param vehiculo Datos actualizados del vehículo.
     * @return Vehículo actualizado o un mensaje de error si no existe.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Object> actualizarVehiculo(@PathVariable Long id, @RequestBody Vehiculo vehiculo) {
        Vehiculo vehiculoExistente = vehiculoService.obtenerVehiculoPorId(id);
        if (vehiculoExistente != null) {
            vehiculo.setId(id);
            Vehiculo vehiculoActualizado = vehiculoService.guardarVehiculo(vehiculo);
            return ResponseEntity.ok(vehiculoActualizado);
        } else {
            return ResponseEntity.status(404).body("El vehículo con ID " + id + " no fue encontrado.");
        }
    }

    /**
     * Elimina un vehículo por su ID.
     *
     * @param id ID del vehículo a eliminar.
     * @return Mensaje indicando si se eliminó o no.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Object> eliminarVehiculo(@PathVariable Long id) {
        Vehiculo vehiculoExistente = vehiculoService.obtenerVehiculoPorId(id);
        if (vehiculoExistente != null) {
            vehiculoService.eliminarVehiculo(id);
            return ResponseEntity.ok("El vehículo con ID " + id + " fue eliminado.");
        } else {
            return ResponseEntity.status(404).body("El vehículo con ID " + id + " no fue encontrado.");
        }
    }

    /**
     * Busca vehículos por su placa.
     *
     * @param placa Placa del vehículo a buscar.
     * @return Lista de vehículos encontrados.
     */
    @GetMapping("/buscar")
    public ResponseEntity<List<Vehiculo>> buscarVehiculoPorPlaca(@RequestParam String placa) {
        List<Vehiculo> vehiculos = vehiculoService.buscarPorPlaca(placa);
        return ResponseEntity.ok(vehiculos);
    }
}
