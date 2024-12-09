import React from "react";

const TrVehiculo = ({ vehiculo, onVerPagos }) => {
    return (
        <tr key={vehiculo.id}>
            <td>{vehiculo.id}</td>
            <td>{vehiculo.placa}</td>
            <td>
                <button
                    onClick={() => onVerPagos(vehiculo.pagos)}
                    style={styles.button}
                >
                    Ver Pagos
                </button>
            </td>
        </tr>
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
};

export default TrVehiculo;
