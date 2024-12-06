package com.autos.autospring.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.autos.autospring.models.Celda;
import com.autos.autospring.services.CeldaService;

@RestController
@RequestMapping("/celdas")
public class celdaController {

    @Autowired
    private CeldaService celdaService;

    @GetMapping
    public List<Celda> obtenerTodasLasCeldas() {
        return celdaService.obtenerTodasLasCeldas();
    }

    @GetMapping("/{id}")
    public Optional<Celda> obtenerCeldaPorId(@PathVariable Long id) {
        return celdaService.obtenerCeldaPorId(id);
    }

    @PostMapping
    public Celda guardarCelda(@RequestBody Celda celda) {
        return celdaService.guardarCelda(celda);
    }

    @PutMapping("/{id}")
    public Celda actualizarCelda(@PathVariable Long id, @RequestBody Celda celda) {
        return celdaService.actualizarCelda(id, celda);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarCelda(@PathVariable Long id) {
        return celdaService.eliminarCelda(id);
    }
}
