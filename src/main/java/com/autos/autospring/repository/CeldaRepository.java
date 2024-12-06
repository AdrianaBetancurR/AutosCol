package com.autos.autospring.repository;

import com.autos.autospring.models.Celda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CeldaRepository extends JpaRepository<Celda, Long> {
    boolean existsByNumero(String numero);
}
