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

            public List<Celda> obtenerTodasLasCeldas() {
                return celdaRepository.findAll();
            }

            public Optional<Celda> obtenerCeldaPorId(Long id) {
                return celdaRepository.findById(id);
            }

            public Celda guardarCelda(Celda celda) {
                return celdaRepository.save(celda);
            }

            public Celda actualizarCelda(Long id, Celda celda) {
                if (celdaRepository.existsById(id)) {
                    celda.setId(id);
                    return celdaRepository.save(celda);
                }
                return null;
            }

            public boolean eliminarCelda(Long id) {
                if (celdaRepository.existsById(id)) {
                    celdaRepository.deleteById(id);
                    return true;
                }
                return false;
            }

            // Nuevo método para obtener celdas por estado
            public List<Celda> obtenerCeldasPorEstado(Celda.EstadoCelda estado) {
                return celdaRepository.findByEstado(estado);
            }
        }
