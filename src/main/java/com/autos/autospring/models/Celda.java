package com.autos.autospring.models;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "celdas")
public class Celda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String numero;

    @Column(nullable = false)  // Asegúrate de que este campo no sea nulo
    private String codigo;

    @OneToMany(mappedBy = "celda", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value = "reference_celda_vehiculo")
    private List<Vehiculo> vehiculos;

    public Celda() {}

    public Celda(String numero, String codigo) {
        this.numero = numero;
        this.codigo = codigo;  // Inicializar el código
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public List<Vehiculo> getVehiculos() {
        return vehiculos;
    }

    public void setVehiculos(List<Vehiculo> vehiculos) {
        this.vehiculos = vehiculos;
    }
}
