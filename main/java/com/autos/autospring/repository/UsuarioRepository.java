package com.autos.autospring.repository;

import com.autos.autospring.models.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
   
    Optional<Usuario> findByCorreo(String correo);

    
    boolean existsByCorreo(String correo);
}
