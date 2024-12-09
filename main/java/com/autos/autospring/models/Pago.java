package com.autos.autospring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pagos")

@Getter
@Setter
public class Pago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double monto;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    @JsonBackReference 
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "vehiculo_id")
    @JsonBackReference(value="reference_vehiculo_pago")
    private Vehiculo vehiculo;

    
} 