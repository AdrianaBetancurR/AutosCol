import React, { useState, useEffect } from "react";
import axios from "axios";

const UsuariosList = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [pagosUsuario, setPagosUsuario] = useState([]); 
    const [isPagosModalOpen, setIsPagosModalOpen] = useState(false); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [numTelefono, setNumTelefono] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/usuarios")
            .then(response => {
                setUsuarios(response.data);
            })
            .catch(error => {
                console.error("Hubo un error al cargar los usuarios", error);
            });
    }, []);

 
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    
    const handleCrearUsuario = (e) => {
        e.preventDefault();

        
        if (!nombre || !apellido || !correo || !numTelefono) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        
        const usuarioData = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            numTelefono: numTelefono,
        };

        axios.post("http://localhost:8080/usuarios", usuarioData)
            .then(response => {
                alert("Usuario creado correctamente");
                toggleModal();
                setUsuarios(prevUsuarios => [...prevUsuarios, response.data]);
            })
            .catch(error => {
                console.error("Error al crear el usuario", error);
                alert("Error al crear el usuario");
            });
    };

    // Función para mostrar los pagos en un modal
    const handleVerPagos = (pagos) => {
        setPagosUsuario(pagos);
        setIsPagosModalOpen(true);
    };

    const closePagosModal = () => {
        setIsPagosModalOpen(false);
        setPagosUsuario([]);
    };

    return (
        <div>
            <h3>Lista de Usuarios</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Pagos</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.correo}</td>
                            <td>{usuario.numTelefono}</td>
                            <td>
                                <button
                                    onClick={() => handleVerPagos(usuario.pagos)}
                                    style={styles.button}
                                >
                                    Ver Pagos
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Botón para abrir la modal */}
            <button
                onClick={toggleModal}
                style={styles.button}
            >
                Crear Usuario
            </button>

            {/* Modal para crear usuario */}
            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>Crear Usuario</h2>
                        <form onSubmit={handleCrearUsuario}>
                            <div>
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Apellido:</label>
                                <input
                                    type="text"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Correo:</label>
                                <input
                                    type="email"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Teléfono:</label>
                                <input
                                    type="text"
                                    value={numTelefono}
                                    onChange={(e) => setNumTelefono(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <button type="submit" style={styles.submitButton}>
                                    Crear Usuario
                                </button>
                            </div>
                        </form>
                        <button onClick={toggleModal} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}

            {/* Modal para ver pagos */}
            {isPagosModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>Pagos del Usuario</h2>
                        {pagosUsuario.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID Pago</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pagosUsuario.map(pago => (
                                        <tr key={pago.id}>
                                            <td>{pago.id}</td>
                                            <td>{pago.monto}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>Este usuario no tiene pagos registrados.</p>
                        )}
                        <button onClick={closePagosModal} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    modal: {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "5px",
        width: "400px",
    },
    submitButton: {
        backgroundColor: "#007BFF",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    closeButton: {
        marginTop: "10px",
        backgroundColor: "#FF5733",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default UsuariosList;
