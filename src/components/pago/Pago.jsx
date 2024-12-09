import React, { useState, useEffect } from "react";
import axios from "axios";

const PagosList = () => {
    const [pagos, setPagos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [monto, setMonto] = useState("");
    const [usuarioId, setUsuarioId] = useState("");
    const [vehiculoId, setVehiculoId] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/pagos")
            .then(response => {
                setPagos(response.data);
            })
            .catch(error => {
                console.error("Hubo un error al cargar los pagos", error);
            });
    }, []);

    // Función para abrir y cerrar la modal
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    // Función para manejar el envío del formulario de pago
    const handleRealizarPago = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos y sean números
        if (!monto || !usuarioId || !vehiculoId) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        const pagoData = {
            monto: parseFloat(monto),  // Aseguramos que el monto sea un número
            usuario: { id: parseInt(usuarioId) },  // Aseguramos que el ID del usuario sea un número
            vehiculo: { id: parseInt(vehiculoId) },  // Aseguramos que el ID del vehículo sea un número
        };

        axios.post("http://localhost:8080/pagos", pagoData)
            .then(response => {
                alert("Pago realizado correctamente");
                // Cierra la modal después de realizar el pago
                toggleModal();
                // Opcional: puedes recargar los pagos después de realizar uno nuevo
                setPagos(prevPagos => [...prevPagos, response.data]);
            })
            .catch(error => {
                console.error("Error al realizar el pago", error);
                alert("Error al realizar el pago");
            });
    };

    return (
        <div>
            <h3>Lista de Pagos</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Monto</th>
                    </tr>
                </thead>
                <tbody>
                    {pagos.map(pago => (
                        <tr key={pago.id}>
                            <td>{pago.id}</td>
                            <td>{pago.monto}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Botón de realizar pago */}
            <button
                onClick={toggleModal}
                style={styles.button}
            >
                Realizar Pago
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div style={styles.modal}>
                    <div style={styles.modalContent}>
                        <h2>Realizar Pago</h2>
                        <form onSubmit={handleRealizarPago}>
                            <div>
                                <label>Monto:</label>
                                <input
                                    type="number"
                                    value={monto}
                                    onChange={(e) => setMonto(e.target.value)}
                                    required
                                    step="0.01"  // Permitir decimales
                                />
                            </div>
                            <div>
                                <label>ID del Usuario:</label>
                                <input
                                    type="number"
                                    value={usuarioId}
                                    onChange={(e) => setUsuarioId(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>ID del Vehículo:</label>
                                <input
                                    type="number"
                                    value={vehiculoId}
                                    onChange={(e) => setVehiculoId(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <button type="submit" style={styles.submitButton}>
                                    Confirmar Pago
                                </button>
                            </div>
                        </form>
                        <button onClick={toggleModal} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const styles = {
    button: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
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
        width: "300px",
    },
    submitButton: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer",
    },
    closeButton: {
        marginTop: "10px",
        backgroundColor: "#f44336",
        color: "white",
        padding: "5px 10px",
        border: "none",
        cursor: "pointer",
    },
};

export default PagosList;
