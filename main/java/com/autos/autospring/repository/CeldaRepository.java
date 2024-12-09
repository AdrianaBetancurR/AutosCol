package com.autos.autospring.repository;

import com.autos.autospring.models.Celda;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CeldaRepository extends JpaRepository<Celda, Long> {
    
    // Método para encontrar las celdas por estado
    List<Celda> findByEstado(Celda.EstadoCelda estado);
}
