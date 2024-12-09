package com.autos.autospring.services;

import com.autos.autospring.models.Usuario;
import com.autos.autospring.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    // Obtener todos los usuarios
    public List<Usuario> obtenerTodosLosUsuarios() {
        return usuarioRepository.findAll();
    }

    // Obtener un usuario por ID
    public Optional<Usuario> obtenerUsuarioPorId(Long id) {
        return usuarioRepository.findById(id);
    }

    // Guardar un nuevo usuario
    public Usuario guardarUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    // Actualizar un usuario existente
    public Optional<Usuario> actualizarUsuario(Long id, Usuario detallesUsuario) {
        Optional<Usuario> usuarioOpt = usuarioRepository.findById(id);
        if (usuarioOpt.isPresent()) {
            Usuario usuarioExistente = usuarioOpt.get();
            usuarioExistente.setNombre(detallesUsuario.getNombre());
            usuarioExistente.setApellido(detallesUsuario.getApellido());
            usuarioExistente.setCorreo(detallesUsuario.getCorreo());
            usuarioExistente.setNumTelefono(detallesUsuario.getNumTelefono());
            return Optional.of(usuarioRepository.save(usuarioExistente));
        }
        return Optional.empty();
    }

    // Eliminar un usuario por ID
    public boolean eliminarUsuario(Long id) {
        if (usuarioRepository.existsById(id)) {
            usuarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
