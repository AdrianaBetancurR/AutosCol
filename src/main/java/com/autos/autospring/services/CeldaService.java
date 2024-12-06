package com.autos.autospring.services;

import com.autos.autospring.models.Celda;
import com.autos.autospring.repository.CeldaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CeldaService {

    @Autowired
    private CeldaRepository celdaRepository;

    /**
     * Obtiene todas las celdas.
     *
     * @return Lista de celdas.
     */
    public List<Celda> obtenerTodasLasCeldas() {
        return celdaRepository.findAll();
    }

    /**
     * Obtiene una celda por su ID.
     *
     * @param id Identificador de la celda.
     * @return Celda encontrada o un Optional vacío.
     */
    public Optional<Celda> obtenerCeldaPorId(Long id) {
        return celdaRepository.findById(id);
    }

    /**
     * Guarda una nueva celda.
     *
     * @param celda Celda a guardar.
     * @return Celda guardada.
     */
    public Celda guardarCelda(Celda celda) {
        return celdaRepository.save(celda);
    }

    /**
     * Actualiza una celda existente.
     *
     * @param id      Identificador de la celda a actualizar.
     * @param detallesCelda Nuevos detalles de la celda.
     * @return Celda actualizada o null si no se encuentra.
     */
    public Celda actualizarCelda(Long id, Celda detallesCelda) {
        Optional<Celda> celdaOptional = celdaRepository.findById(id);

        if (celdaOptional.isPresent()) {
            Celda celdaExistente = celdaOptional.get();
            celdaExistente.setNumero(detallesCelda.getNumero());
            celdaExistente.setVehiculos(detallesCelda.getVehiculos());
            return celdaRepository.save(celdaExistente);
        } else {
            return null;
        }
    }

    /**
     * Elimina una celda por su ID.
     *
     * @param id Identificador de la celda.
     * @return true si la celda fue eliminada, false si no se encontró.
     */
    public boolean eliminarCelda(Long id) {
        Optional<Celda> celdaOptional = celdaRepository.findById(id);

        if (celdaOptional.isPresent()) {
            celdaRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
