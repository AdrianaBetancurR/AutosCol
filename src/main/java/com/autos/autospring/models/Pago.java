    package com.autos.autospring.models;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import lombok.Getter;
    import lombok.Setter;
    import jakarta.persistence.*;

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
