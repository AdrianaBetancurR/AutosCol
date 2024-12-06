package com.autos.autospring.controller;

import com.autos.autospring.models.Pago;
import com.autos.autospring.services.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pagos")
public class pagoController {
    
    @Autowired
    private PagoService pagoService;

    @GetMapping
    public List<Pago> obtenerTodosLosPagos() {
        return pagoService.obtenerTodosLosPagos();
    }

    @GetMapping("/{id}")
    public Optional<Pago> obtenerPagoPorId(@PathVariable Long id) {
        return pagoService.obtenerPagoPorId(id);
    }

    @PostMapping
    public Pago guardarPago(@RequestBody Pago pago) {
        return pagoService.guardarPago(pago);
    }

    @PutMapping("/{id}")
    public Pago actualizarPago(@PathVariable Long id, @RequestBody Pago pago) {
        return pagoService.actualizarPago(id, pago);
    }

    @DeleteMapping("/{id}")
    public boolean eliminarPago(@PathVariable Long id) {
        return pagoService.eliminarPago(id);
    }
}
