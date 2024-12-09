package com.autos.autospring.controller;

import com.autos.autospring.models.Pago;
import com.autos.autospring.services.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pagos")

public class pagoController {

    @Autowired
    private PagoService pagoService;

    // Obtener todos los pagos
    @GetMapping
    public ResponseEntity<List<Pago>> obtenerTodosLosPagos() {
        List<Pago> pagos = pagoService.obtenerTodosLosPagos();
        return ResponseEntity.ok(pagos);
    }

    // Obtener pago por ID
    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerPagoPorId(@PathVariable Long id) {
        Optional<Pago> pago = pagoService.obtenerPagoPorId(id);
        if (pago.isPresent()) {
            return ResponseEntity.ok(pago.get());
        } else {
            return ResponseEntity.status(404).body("Pago con ID " + id + " no encontrado.");
        }
    }

    // Crear un nuevo pago
    @PostMapping
    public ResponseEntity<Pago> guardarPago(@RequestBody Pago pago) {
        Pago nuevoPago = pagoService.guardarPago(pago);
        return ResponseEntity.status(201).body(nuevoPago);
    }

    // Actualizar un pago existente
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarPago(@PathVariable Long id, @RequestBody Pago pago) {
        Optional<Pago> pagoExistente = pagoService.obtenerPagoPorId(id);
        if (pagoExistente.isPresent()) {
            pago.setId(id);
            Pago pagoActualizado = pagoService.actualizarPago(id, pago);
            return ResponseEntity.ok(pagoActualizado);
        } else {
            return ResponseEntity.status(404).body("Pago con ID " + id + " no encontrado.");
        }
    }

    // Eliminar un pago
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPago(@PathVariable Long id) {
        boolean eliminado = pagoService.eliminarPago(id);
        if (eliminado) {
            return ResponseEntity.ok("Pago con ID " + id + " eliminado correctamente.");
        } else {
            return ResponseEntity.status(404).body("Pago con ID " + id + " no encontrado.");
        }
    }
}
