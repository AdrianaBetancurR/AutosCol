package com.autos.autospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.autos.autospring.models.Pago;

@Repository
public interface PagoRepository extends JpaRepository<Pago, Long> {
}


