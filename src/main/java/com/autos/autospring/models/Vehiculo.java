package com.autos.autospring.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "vehiculos")
public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 50)
    private String placa;

    @ManyToOne
    @JoinColumn(name = "celda_id")
    @JsonBackReference(value="reference_celda_vehiculo")
    private Celda celda;
    
    @OneToMany(mappedBy = "vehiculo", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value="reference_vehiculo_pago")
    private List<Pago> pagos;

    // Constructor vacío
    public Vehiculo() {}

    // Constructor con parámetros
    public Vehiculo(String placa) {
        this.placa = placa;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getPlaca() { return placa; }
    public void setPlaca(String placa) { this.placa = placa; }
    public Celda getCelda() { return celda; }
    public void setCelda(Celda celda) { this.celda = celda; }
    public List<Pago> getPagos() { return pagos; }
    public void setPagos(List<Pago> pagos) { this.pagos = pagos; }
}
