import React, { useState, useEffect } from "react";
import axios from "axios";

const VehiculosList = () => {
    const [vehiculos, setVehiculos] = useState([]);
    const [celdaId, setCeldaId] = useState("");
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState(null);
    const [isAsignarModalOpen, setIsAsignarModalOpen] = useState(false);
    const [isAgregarModalOpen, setIsAgregarModalOpen] = useState(false); // Modal de agregar vehículo
    const [placaNueva, setPlacaNueva] = useState(""); // Para la nueva placa

    useEffect(() => {
        axios.get("http://localhost:8080/vehiculo")
            .then(response => {
                console.log("Vehículos cargados:", response.data);
                setVehiculos(response.data);
            })
            .catch(error => {
                console.error("Hubo un error al cargar los vehículos", error);
            });
    }, []);

    // Función para abrir el modal de asignación de celda
    const handleAbrirAsignarCelda = (vehiculo) => {
        setVehiculoSeleccionado(vehiculo);
        setIsAsignarModalOpen(true);
    };

    // Función para cerrar el modal de asignación de celda
    const closeAsignarModal = () => {
        setIsAsignarModalOpen(false);
        setCeldaId("");
        setVehiculoSeleccionado(null);
    };

    // Función para asignar una celda a un vehículo
    const handleAsignarCelda = () => {
        if (!celdaId.trim()) {
            alert("El ID de la celda no puede estar vacío.");
            return;
        }
    
        const vehiculoActualizado = {
            ...vehiculoSeleccionado,
            celda: { id: celdaId },  // Aquí estás asignando la celda al vehículo
        };
    
        axios.post("http://localhost:8080/vehiculo", vehiculoActualizado)
            .then(response => {
                setVehiculos(prevVehiculos =>
                    prevVehiculos.map(vehiculo =>
                        vehiculo.id === response.data.id ? response.data : vehiculo
                    )
                );
                closeAsignarModal();
            })
            .catch(error => {
                console.error("Hubo un error al asignar la celda", error);
            });
    };
    
    // Función para abrir el modal de agregar vehículo
    const handleAbrirAgregarVehiculo = () => {
        setIsAgregarModalOpen(true);
    };

    // Función para cerrar el modal de agregar vehículo
    const closeAgregarModal = () => {
        setIsAgregarModalOpen(false);
        setPlacaNueva("");
    };

    // Función para agregar un nuevo vehículo
    const handleAgregarVehiculo = () => {
        if (!placaNueva.trim()) {
            alert("La placa no puede estar vacía.");
            return;
        }

        const nuevoVehiculo = { placa: placaNueva };

        axios.post("http://localhost:8080/vehiculo", nuevoVehiculo)
            .then(response => {
                setVehiculos(prevVehiculos => [...prevVehiculos, response.data]);
                closeAgregarModal();
            })
            .catch(error => {
                console.error("Hubo un error al agregar el vehículo", error);
            });
    };

    // Función para eliminar un vehículo
    const handleEliminarVehiculo = (vehiculoId) => {
        axios.delete(`http://localhost:8080/vehiculo/${vehiculoId}`)
            .then(() => {
                setVehiculos(prevVehiculos => prevVehiculos.filter(vehiculo => vehiculo.id !== vehiculoId));
            })
            .catch(error => {
                console.error("Hubo un error al eliminar el vehículo", error);
            });
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.header}>Lista de Vehículos</h3>

            <button onClick={handleAbrirAgregarVehiculo} style={styles.addButton}>
                Agregar Vehículo
            </button>

            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Placa</th>
                        <th>Asignar Celda</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {vehiculos.map(vehiculo => (
                        <tr key={vehiculo.id}>
                            <td>{vehiculo.id}</td>
                            <td>{vehiculo.placa}</td>
                            <td>
                                <button
                                    onClick={() => handleAbrirAsignarCelda(vehiculo)}
                                    style={styles.button}
                                >
                                    Asignar Celda
                                </button>
                            </td>
                            <td>
                                <button
                                    onClick={() => handleEliminarVehiculo(vehiculo.id)}
                                    style={styles.deleteButton}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal para asignar celda */}
            {isAsignarModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2 style={styles.header}>Asignar Celda</h2>
                        <p>Vehículo: {vehiculoSeleccionado?.placa}</p>
                        <input
                            type="text"
                            value={celdaId}
                            onChange={(e) => setCeldaId(e.target.value)}
                            placeholder="Ingresa el ID de la celda"
                            style={styles.input}
                        />
                        <button onClick={handleAsignarCelda} style={styles.button}>Guardar</button>
                        <button onClick={closeAsignarModal} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}

            {/* Modal para agregar vehículo */}
            {isAgregarModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2 style={styles.header}>Agregar Vehículo</h2>
                        <input
                            type="text"
                            value={placaNueva}
                            onChange={(e) => setPlacaNueva(e.target.value)}
                            placeholder="Ingresa la placa del vehículo"
                            style={styles.input}
                        />
                        <button onClick={handleAgregarVehiculo} style={styles.button}>Agregar</button>
                        <button onClick={closeAgregarModal} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
    },
    header: {
        color: "#333",
        marginBottom: "20px",
    },
    table: {
        borderCollapse: "collapse",
        width: "80%",
        marginBottom: "20px",
    },
    button: {
        backgroundColor: "#007BFF",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    deleteButton: {
        backgroundColor: "#FF5733",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    addButton: {
        backgroundColor: "#28A745",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        marginBottom: "20px",
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
        textAlign: "center",
    },
    closeButton: {
        marginTop: "10px",
        backgroundColor: "#6C757D",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    input: {
        padding: "8px",
        marginBottom: "10px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "80%",
    },
};

export default VehiculosList;
