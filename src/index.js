import React from "react";
import ReactDOM from 'react-dom';  // Mantén la importación original para React 17
import App from "../src/App";
import { BrowserRouter as Router } from "react-router-dom"; // Importa el Router

// Envuelve la aplicación con el Router
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root") // Este es el contenedor principal en tu HTML
);
