package com.autos.autospring.controller;

import com.autos.autospring.models.Celda;
import com.autos.autospring.services.CeldaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/celdas")
public class celdaController {

    @Autowired
    private CeldaService celdaService;

    // Endpoint para obtener todas las celdas
    @GetMapping
    public List<Celda> obtenerTodasLasCeldas() {
        return celdaService.obtenerTodasLasCeldas();
    }

    // Endpoint para obtener celdas disponibles
    @GetMapping("/disponibles")
    public List<Celda> obtenerCeldasDisponibles() {
        return celdaService.obtenerCeldasPorEstado(Celda.EstadoCelda.DISPONIBLE);
    }

    // Endpoint para obtener celdas ocupadas
    @GetMapping("/ocupadas")
    public List<Celda> obtenerCeldasOcupadas() {
        return celdaService.obtenerCeldasPorEstado(Celda.EstadoCelda.OCUPADA);
    }

    // Otros métodos que ya tenías para obtener por ID, crear, actualizar, eliminar
    @GetMapping("/{id}")
    public Celda obtenerCeldaPorId(@PathVariable Long id) {
        return celdaService.obtenerCeldaPorId(id)
                .orElseThrow(() -> new RuntimeException("Celda no encontrada"));
    }

    @PostMapping
    public Celda guardarCelda(@RequestBody Celda celda) {
        return celdaService.guardarCelda(celda);
    }

    @PutMapping("/{id}")
    public Celda actualizarCelda(@PathVariable Long id, @RequestBody Celda celda) {
        return celdaService.actualizarCelda(id, celda);
    }
   

public class CeldaController {

    @PutMapping("/{id}")
    public ResponseEntity<Object> actualizarCelda(@PathVariable Long id, @RequestBody Celda celda) {
        Celda celdaExistente = celdaService.obtenerCeldaPorId(id).orElse(null);
        if (celdaExistente == null) {
            return ResponseEntity.status(404).body("Celda con ID " + id + " no encontrada.");
        }
        celda.setId(id);
        Celda celdaActualizada = celdaService.guardarCelda(celda);
        return ResponseEntity.ok(celdaActualizada);
    }
}


    @DeleteMapping("/{id}")
    public boolean eliminarCelda(@PathVariable Long id) {
        return celdaService.eliminarCelda(id);
    }
}
